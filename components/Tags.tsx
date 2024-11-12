"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const frameworks = [
  {
    value: "anime",
    label: "Anime",
  },
  {
    value: "music",
    label: "Music",
  },
  {
    value: "games",
    label: "Games",
  },
  {
    value: "movies",
    label: "Movies",
  },
  {
    value: "videos",
    label: "Videos",
  },
]

export function Tags({ onTagSelect }: { onTagSelect: (tag: string) => void }) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
  
    const handleSelect = (currentValue: string) => {
      setValue(currentValue === value ? "" : currentValue);
      onTagSelect(currentValue === value ? "" : currentValue); // Update parent state
      setOpen(false);
    };
  
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="border-neutral-700 rounded-xl text-neutral-400 w-[200px] justify-between"
          >
            {value ? frameworks.find((framework) => framework.value === value)?.label : "Select tags..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={() => handleSelect(framework.value)}
                  >
                    {framework.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }
