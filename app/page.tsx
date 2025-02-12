// this is main page which is rendered
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {
  return (
    <div> 
      <h2>Subscribe to my channel.</h2>
      <Button variant="outline">Subscribe</Button>
    </div>
  );
}
