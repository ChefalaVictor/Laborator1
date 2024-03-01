import React from 'react';
import {Layout} from 'antd';
import SidebarCustom from "./layouts/SidebarCustom.tsx";
import HeaderCustom from "./layouts/HeaderCustom.tsx";
import FooterCustom from "./layouts/FooterCustom.tsx";
import ContentCustom from "./layouts/ContentCustom.tsx";

const App: React.FC = () => {
    return (
        <>
            <Layout hasSider>
                <SidebarCustom />

                <Layout style={{marginLeft: 200}}>

                    <HeaderCustom />

                    <ContentCustom />
                    <FooterCustom />
                </Layout>
            </Layout>
        </>
    );
};

export default App;