import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SubHeader } from "../SubHeader/styled";
import { Projects } from "./Projects";
import { fetchRepositories, selectRepositoriesStatus, selectRepositories } from "../../personalHomepageSlice";
import { SubTitle, Header, Section, StyledGithubIcon } from "./styled";

export const Portfolio = () => {
    const dispatch = useDispatch();
    const repositories = useSelector(selectRepositories);
    const repositoriesStatus = useSelector(selectRepositoriesStatus)

    useEffect(() => {
        dispatch(fetchRepositories());
    }, [dispatch]);

    return (
        <Section>
            <Header>
                <StyledGithubIcon />
                <SubHeader>Portfolio</SubHeader>
                <SubTitle>My recent projects</SubTitle>
            </Header>
            <Projects
            status={repositoriesStatus}
            repositories={repositories}
            />
        </Section>
    )
}