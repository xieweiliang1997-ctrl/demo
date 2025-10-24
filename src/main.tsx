import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'normalize.css';
import Layout from "./Layout.tsx";
import 'antd/dist/reset.css';
import {ConfigProvider} from "antd";

createRoot(document.getElementById('root')!).render(
  <ConfigProvider
    theme={{
      token: {
        borderRadius:0,
      },
      components: {
        Input: {
          activeBorderColor:"transparent",
          hoverBorderColor:'#d9d9d9',

        },
      },
    }}
  >
  <Layout>
    <App />
  </Layout>
  </ConfigProvider>
)
