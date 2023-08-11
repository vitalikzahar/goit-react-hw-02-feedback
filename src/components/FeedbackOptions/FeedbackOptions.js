export const FeedbackOptions = ({ options, feedback }) => {
  return (
    <>
      <button
        onClick={() => {
          feedback('good');
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          feedback('neutral');
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          feedback('bad');
        }}
      >
        Bad
      </button>
    </>
  );
};
