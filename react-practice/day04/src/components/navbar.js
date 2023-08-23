import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import React from "react";
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
                            <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>three!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                <Button colorScheme='blue'>Button</Button>
            </div>
        );
    }

}
export { NavBar }