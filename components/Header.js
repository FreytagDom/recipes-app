import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>Startseite</a>
        </Link>
        <Link href="/veggie">
          <a>Veggie</a>
        </Link>
        <Link href="/dessert">
          <a>Dessert</a>
        </Link>
      </nav>
    </header>
  );
}
