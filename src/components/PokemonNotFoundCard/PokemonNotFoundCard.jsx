import { EmojiWrapper, NotFoundCard } from "./styles";

const PokemonNotFoundCard = () => {
  return (
    <NotFoundCard>
      <div>
        <h3>
          <EmojiWrapper>
            <span role="img" aria-label="Scream">
              😱
            </span>
          </EmojiWrapper>
        </h3>
        <h3>No Pokemon found. Please refine your search</h3>
      </div>
    </NotFoundCard>
  );
};

export default PokemonNotFoundCard;
