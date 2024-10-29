import { RouteObject } from "react-router-dom";
import Layout from "./components/layout/Layout/Layout";
import Events from "./components/pages/Events/Events";
import CreateEvent from "./components/pages/CreateEvent/CreateEvent";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import Event from "./components/pages/Event/Event";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {index: true, element: <Events />},
            {path: 'create-event', element: <CreateEvent />},
            {path: 'contact-us', element: <ContactUs />},
            {path: 'events/:id', element: <Event />},
        ]
    }
];

export default routes;