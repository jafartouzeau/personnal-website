import SideMenu from "@/components/side-menu/side-menu";
import type { sideMenuLink } from "@/components/side-menu/side-menu";

export default function PageTemplate({
  content,
  sideMenuLinks,
}: Readonly<{
  content: React.ReactNode;
  sideMenuLinks: sideMenuLink[];
}>) {
    return (<>
        <SideMenu links={sideMenuLinks}/>
        <div style={{display:"flex", flexDirection:"column", width:"100%"}}>
          {content}
        </div>
    </>)
}