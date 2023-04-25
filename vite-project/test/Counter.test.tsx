import { it, describe, expect, assert, vi } from "vitest";
import { setup } from "./utils";
import { Counter } from "../src/components/Counter";
import ReactDOM from "react-dom/client";
import { act } from "@testing-library/react";
import React from "react";

describe("Counter", () => {
  it("should increment when clicking on increment button", async () => {
    // On créer un container
    const container = document.createElement("div");
    document.body.append(container);

    act(() => {
      // On fait comme dans une vrai application :
      // On créer une `root` React puis on rend notre component React à l'intérieur
      const root = ReactDOM.createRoot(container);
      root.render(<Counter />);
    });

    console.log(document.body.innerHTML);

    // 🦁 Utilise `querySelector` pour récupérer le text du counter
    // expect que sont contenue est égal à '0'

    // 🦁 Utilise un `querySelectorAll` pour récupérer les boutons "-" et "+" du DOM

    // 🦁 Click sur le bouton "-" (en wrappant dans un `act`)

    // 🦁 Expect que le text du counter est passé à '-1'

    // 🦁 Clique sur le bouton "+"

    // 🦁 Expect que le text du counter est passé à '0'
  });
});
