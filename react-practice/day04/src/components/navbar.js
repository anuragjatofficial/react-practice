import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import React from "react";
import { Tab } from "./tab";
class NavBar extends React.Component{
    render(){
        return(
            <div>
                <Tabs>
                    <TabList>
                        <Tab>One</Tab>
                        <Tab>Two</Tab>
                        <Tab>Three</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Tab/>
                        </TabPanel>
                        <TabPanel>
                            <Tab />
                        </TabPanel>
                        <TabPanel>
                            <Tab />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                <Button colorScheme='blue'>Button</Button>
            </div>
        );
    }

}
export { NavBar }