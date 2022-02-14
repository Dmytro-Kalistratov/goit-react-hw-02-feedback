import Feedback from './Feedback';

export const App = () => {
  return (
    <div>
      <Feedback initialGood={0} initialNeutral={0} initialBad={0} />
    </div>
  );
};
