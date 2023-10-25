import Handlebars from "handlebars";


const root = document.querySelector<HTMLDivElement>('#app');

export default (temp: string, data: any = null) => {
    console.log('temp', temp)
    const compiledTemp = Handlebars.compile((temp));

    if (!root) {
        return;
    }
    root.innerHTML = compiledTemp(data);
};
