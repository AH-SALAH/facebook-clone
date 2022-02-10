import { Session } from 'next-auth'
import ClientAuth from '../components/Auth/ClientAuth'
import withServerAuth from '../components/Auth/ServerAuth'
import Layout from '../components/layout'


const Home = ({ cshn }: { cshn?: Session }) => {
    return (
        <ClientAuth cshn={cshn}>
            <Layout />
        </ClientAuth>
    )
}

export default Home;

// server auth protect
export const getServerSideProps = withServerAuth(async (ctx, cshn) => {
    return {
        props: { cshn },
    }
});