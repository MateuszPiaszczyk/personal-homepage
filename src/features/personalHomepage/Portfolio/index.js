import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../../personalHomepageSlice";
import { Content } from "./Content";
import { githubUsername } from "./githubUsername";
import { Header, RecentProjects, Section, StyledGithubIcon } from "./styled";
import { SubHeader } from "./SubHeader";

export const Portfolio = () => {
    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories(githubUsername));
    
    }, [dispatch]);

    return (
        <Section>
            <Header>
                <StyledGithubIcon />
                <SubHeader>Portfolio</SubHeader>
                <RecentProjects>Recent Projects / Ostatnie Projekty</RecentProjects>
            </Header>
        
        <Content 
        status={repositoriesStatus}
        repositories={repositories}
        />
        </Section>
    );
};