import { EmojiWrapper, NotFoundCard } from "./styles";

const PokemonNotFoundCard = () => {
  return (
    <NotFoundCard className="card bg-danger">
      <div className="card-body">
        <h3 className="card-title">
          <EmojiWrapper>
            <span role="img" aria-label="Scream">
              😱
            </span>
          </EmojiWrapper>
        </h3>
        <h3 className="card-text">
          No Pokemon found. Please refine your search
        </h3>
      </div>
    </NotFoundCard>
  );
};

export default PokemonNotFoundCard;
