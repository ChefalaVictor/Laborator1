import {Layout, theme} from 'antd';
import {Outlet} from "react-router-dom";

const {Content} = Layout;

const ContentCustom = () => {


    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();



    return (
        <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
            <div
                style={{
                    padding: 24,
                    textAlign: 'center',
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Outlet />
            </div>
        </Content>

    )
}

export default ContentCustom