import React from "react";
import Section from "./components/Section";
import Counter from "./components/Counter";
import Clock from "./components/Clock";
import AddTodo from "./components/AddTodo";
import Navigation from "./components/navigation/Navigation";
import Todos from "./components/Todos";

export default async function Home() {
  return (
    <main className="container mx-auto py-4 space-y-8">
      <Navigation backgroundColor="red" textColor="black" />
      <h1>Hey von Irena zur Hausaufgabe am 17.10.2023</h1>
      <Section />
      <AddTodo />
      <Todos />
      <Counter />
      <Clock />
    </main>
  )
}