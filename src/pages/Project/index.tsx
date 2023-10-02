import { useParams } from 'react-router-dom'
import data from '../../data/projects.json'
import { RemoveScrollSnap } from '../../styles';
import { BtnVisit, Desc, Img, Layout, TechList, Title } from './styles';
import Loader from '../../components/Loader';

const Project = () => {
    const { id } = useParams()

    const res = data.projects.filter(function (item) {
        return item.id == id;
    });
    const project = res[0]

    if (!project) {
        return <Loader />
    }

    return (
        <div className='centro'>
            <RemoveScrollSnap />
            <Layout>
                <div>
                    <Title>{project.name}</Title>
                    <TechList>
                        {project.tech.map((tech) => (
                            <li key={tech}>{tech}</li>
                        )
                        )}
                    </TechList>
                    {project.preTxt && <Desc className='left'>{project.preTxt}</Desc>}
                    <Desc>{project.description}</Desc>
                    {project.postTxt && <Desc className='right'>{project.postTxt}</Desc>}
                </div>
                <Img src={`/img/${project.thumb}`} />
            </Layout>
            {project.type == "website" &&
                <BtnVisit className='magic' href={project.link} target='_blank'>Visite!</BtnVisit>
            }
        </div>
    )
}

export default Project