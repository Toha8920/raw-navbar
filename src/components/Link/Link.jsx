/* eslint-disable react/prop-types */
const Link = ({ route }) => {
    const { name, path } = route;

    return (
        <li className=" mr-12">
            <a href={path}>{name}</a>
        </li>
    );
};

export default Link;