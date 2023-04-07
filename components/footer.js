import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <a href="http://www.bamfordresearch.com/">
        <Image src="/www-32px.png" height={32} width={32} alt="Website" />
      </a>
      <a href="https://github.com/jb-23/nextmail">
        <Image src="/GitHub-Mark-32px.png" height={32} width={32} alt="GitHub" />
      </a>
    </footer>
  );
}
