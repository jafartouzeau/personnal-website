import SideMenu from "@/components/side-menu/side-menu";

export default function PageTemplate({
  content,
  sideMenuData,
}: Readonly<{
  content: React.ReactNode;
  sideMenuData: Record<string, any>;
}>) {
    return (<>
        <SideMenu data={sideMenuData}/>
        <div style={{display:"flex", flexDirection:"column", width:"100%"}}>
          {content}
        </div>
    </>)
}