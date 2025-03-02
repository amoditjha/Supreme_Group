import ContactForm from "@/Components/ContactForm";
import Content from "@/Components/Content";
import Hero from "@/Components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full">
<Hero/>
<Content/>
<ContactForm/>
    </div>
  );
}
