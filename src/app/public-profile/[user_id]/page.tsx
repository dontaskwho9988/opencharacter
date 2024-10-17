import React from 'react';
import { auth } from "@/server/auth"
import { sql } from "drizzle-orm"
import { users, characters } from "@/server/db/schema"
import { MessageCircle, MoreVertical } from "lucide-react"
import Link from 'next/link';
import ProfileNav from "@/components/profile-nav"
import SettingsButton from "@/components/user-settings-button"
import { db } from "@/server/db"

type User = typeof users.$inferSelect;
type Character = typeof characters.$inferSelect;

export const runtime = "edge"

export default async function ProfileLayout({ params }: { params: { user_id: string } }) {
    const session = await auth()

    if (!session?.user) {
        return <div className="flex justify-center items-center h-screen">Please sign in to view profiles.</div>
    }

    // Fetch the user from the database
    const user: User | undefined = await db
        .select()
        .from(users)
        .where(sql`${users.id} = ${params.user_id}`)
        .get();

    if (!user) {
        return <div className="flex justify-center items-center h-screen">User not found.</div>
    }

    // Fetch public characters for the user, ordered by interactionCount
    const publicCharacters: Character[] = await db
        .select()
        .from(characters)
        .where(sql`${characters.userId} = ${params.user_id} AND ${characters.visibility} = 'public'`)
        .orderBy(sql`${characters.interactionCount} DESC`)
        .all();

    // Calculate total interactions for the user
    const totalInteractions = publicCharacters.reduce((sum, character) => sum + character.interactionCount, 0);

    return (
        <div className="flex justify-center bg-neutral-900 mb-24">
            <div className="bg-neutral-900 text-white p-4 w-full max-w-lg">
                <div className="flex flex-col items-center mb-6 gap-2">
                    <div className="w-32 h-32 rounded-md overflow-hidden mb-2">
                        <img
                            src={user.image ?? '/default-avatar.jpg'}
                            alt={user.name ?? 'User'}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h1 className="text-xl font-bold mb-1">{user.name ?? 'User'}</h1>
                    <p>{user.bio}</p>
                    <p className="text-sm text-neutral-400 mb-2">
                        <MessageCircle className="inline w-4 h-4 mr-1" /> {totalInteractions} chats
                    </p>
                    {session.user.id === params.user_id && <SettingsButton user={user} />}
                </div>
        
                <div className="space-y-4 mb-24">
                    <h2 className="text-lg font-semibold mb-4">Public Characters</h2>
                    {publicCharacters.map((character) => (
                        <Link key={character.id} href={`/chat/${character.id}`} className="block hover:bg-neutral-800 py-2 rounded-lg">
                            <div className="flex items-center overflow-hidden">
                                {character.avatar_image_url ? (
                                    <img src={character.avatar_image_url} alt={character.name} className="w-16 h-16 rounded-md mr-3 flex-shrink-0 object-cover" />
                                ) : (
                                    <div className="w-24 h-24 bg-neutral-700 rounded-full flex items-center justify-center text-xl font-bold text-white mr-3 flex-shrink-0">
                                        {character.name.charAt(0)}
                                    </div>
                                )}
                                <div className="flex-grow min-w-0">
                                    <h3 className="font-semibold text-sm">{character.name}</h3>
                                    <p className="text-xs text-neutral-400 truncate">{character.tagline}</p>
                                    <p className="text-xs text-neutral-500">
                                        <MessageCircle className="inline w-3 h-3 mr-1" />
                                        {character.interactionCount} interactions
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}