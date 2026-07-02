import SideMenu from "@/components/side-menu/side-menu";

export default function PageTemplate({
  content,
  sideMenuLinks,
  sideMenuPage,
}: Readonly<{
  content: React.ReactNode;
  sideMenuLinks: string[];
  sideMenuPage: string
}>) {
    return (<>
        <SideMenu links={sideMenuLinks} page={sideMenuPage}/>
        <div style={{display:"flex", flexDirection:"column", width:"100%"}}>
          {content}
        </div>
    </>)
}