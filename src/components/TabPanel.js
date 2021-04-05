const TabPanel = (props) => {
  const { children, value, index } = props;
  return <div>{value === index && props.children}</div>;
};
export default TabPanel;
