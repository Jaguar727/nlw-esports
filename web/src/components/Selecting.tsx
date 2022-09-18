import * as Select from "@radix-ui/react-select";
import { useState, useEffect, SelectHTMLAttributes } from "react";

interface Game {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number;
    };
}

export function Selecting() {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        fetch("http://localhost:7270/games")
            .then(response => response.json())
            .then(data => {
                setGames(data);
            });
    });

    return (
        <Select.Root>
            <Select.Trigger className="bg-zinc-900 text-zinc-500 rounded py-3 text-start px-4 flex justify-between">
                <Select.Value placeholder="Selecione o jogo que deseja jogar" />
                <Select.Icon />
            </Select.Trigger>

            <Select.Portal>
                <Select.Content>
                    <Select.ScrollUpButton />
                    <Select.Viewport className="bg-zinc-900 rounded border-zinc-800">
                        {games.map(game => {
                            return (
                                <Select.Item key={game.id}
                                    className="px-4 py-3 bg-zinc-900 text-zinc-500 hover:bg-zinc-800 hover:text-white"
                                    value={game.title}
                                    >
                                    <Select.ItemText>
                                        {game.title}
                                    </Select.ItemText>
                                </Select.Item>
                            );
                        })}
                        <Select.Separator />
                    </Select.Viewport>
                    <Select.ScrollDownButton />
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
}
