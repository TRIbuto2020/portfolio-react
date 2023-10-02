import data from '../../data/projects.json'
import { RemoveScrollSnap } from '../../styles'
import { Card, Layout, Title, Overlay, ButtonLink } from './styles'

const Portfolio = () => {
    return (
        <>
            <RemoveScrollSnap />
            <section className="centro">
                <Title className='section__title'>Portfólio</Title>
                <Layout >
                    {data.projects.map((project) => (
                        <Card style={{ backgroundImage: `url("/img/${project.thumb}")` }} key={project.id}>
                            <Overlay>
                                <div>
                                    <ButtonLink to={`/Portfolio/${project.id}`}>{project.name}</ButtonLink>
                                </div>
                            </Overlay>
                        </Card >
                    )
                    )}
                </Layout>
            </section>
        </>
    )
}

export default Portfolio