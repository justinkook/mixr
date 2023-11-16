"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Salad } from "lucide-react";
import ListItem from "../manage/overview/list-item";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Musicians",
    href: "/docs/primitives/alert-dialog",
    description:
      "Djs and live musicians for your event. We have a wide variety of musicians to choose from.",
  },
  {
    title: "Catering",
    href: "/docs/primitives/hover-card",
    description:
      "Catering for your event from a variety of restaurants and food trucks.",
  },
  {
    title: "A/V and Tech",
    href: "/docs/primitives/progress",
    description: "Get on demand audio and visual equipment and tech support.",
  },
  {
    title: "Security",
    href: "/docs/primitives/scroll-area",
    description: "Need bouncers or security guards? We have you covered.",
  },
  {
    title: "Decorators",
    href: "/docs/primitives/tabs",
    description: "Craft unique decorations personalized to your event",
  },
  {
    title: "Beverages",
    href: "/docs/primitives/tooltip",
    description: "Alcohol and wine tastings to liven up the mood",
  },
];

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Venues</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Salad />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      GigSalad
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Our official partner. Book something awesome with
                      GigSalad.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/search" title="Search">
                Search venues for your next event
              </ListItem>
              <ListItem href="/save" title="Save">
                Save your favorite venues to an event
              </ListItem>
              <ListItem href="/playground" title="Ask Eva">
                Get recommendations for venues using Eva
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/sponsors" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Sponsors
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
