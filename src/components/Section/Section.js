// import { Statistics } from 'components/Statistics/Statistics';
export const Section = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};
