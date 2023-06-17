import { List, Tile, Header, Description, LinksWrapper, LinksRow, LinksValue, Link } from "./styled"

export const Repo =({ repositories }) => (
    <List>
    {repositories.map(({ id, name, description, homepage, html_url }) => (
      <Tile key={id}>
        <Header>{name.replaceAll("-", " ")}</Header>
        <Description>{description}</Description>
        <LinksWrapper>
          {!!homepage && (
            <LinksRow>
              <dt>Demo:</dt>
              <LinksValue>
                <Link href={homepage} target="_blank" rel="noreferrer">{homepage}</Link>
              </LinksValue>
            </LinksRow>
          )}
          <LinksRow>
              <dt>Code:</dt>
              <LinksValue>
                <Link href={html_url} target="_blank" rel="noreferrer">{html_url}</Link>
              </LinksValue>
            </LinksRow>
        </LinksWrapper>
      </Tile>
    ))}
  </List>
);