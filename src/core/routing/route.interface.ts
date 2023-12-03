export interface RouteInterface {
    navigate: (pathname: string) => void;
    leave: () => void;
    match: (pathname: string) => boolean;
    render: () => void;
}
