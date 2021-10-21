import { useState } from "react";
import { Wrapper, TabMenuItem, ItemLink } from "./style";

const TabMenu = () => {

    const [currentTab, setCurrentTab] = useState(0);

    return (
        <Wrapper>
            <TabMenuItem onClick={() => setCurrentTab(0)}> <ItemLink active={currentTab === 0 ? true : false}>best</ItemLink> </TabMenuItem>
            <TabMenuItem onClick={() => setCurrentTab(2)}> <ItemLink active={currentTab === 2 ? true : false}>new</ItemLink> </TabMenuItem>
            <TabMenuItem onClick={() => setCurrentTab(3)}> <ItemLink active={currentTab === 3 ? true : false}>rising</ItemLink> </TabMenuItem>
            <TabMenuItem onClick={() => setCurrentTab(4)}> <ItemLink active={currentTab === 4 ? true : false}>controversial</ItemLink> </TabMenuItem>
            <TabMenuItem onClick={() => setCurrentTab(1)}> <ItemLink active={currentTab === 1 ? true : false}>hot</ItemLink> </TabMenuItem>
            <TabMenuItem onClick={() => setCurrentTab(5)}> <ItemLink active={currentTab === 5 ? true : false}>top</ItemLink> </TabMenuItem>
            <TabMenuItem onClick={() => setCurrentTab(6)}> <ItemLink active={currentTab === 6 ? true : false}>gilded</ItemLink> </TabMenuItem>
            <TabMenuItem onClick={() => setCurrentTab(7)}> <ItemLink active={currentTab === 7 ? true : false}>wiki</ItemLink> </TabMenuItem>
            <TabMenuItem onClick={() => setCurrentTab(8)}> <ItemLink active={currentTab === 8 ? true : false}>show images</ItemLink> </TabMenuItem>
        </Wrapper>
    )
}

export default TabMenu;