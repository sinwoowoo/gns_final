export interface SubSubMenu {
    title: string;
    link: string;
    show: boolean;
    intro?: string;
}

export interface SubMenu {
    title: string;
    link: string;
    show: boolean;
    intro?: string;
    subMenu: SubSubMenu[];
}

export interface NavMenu {
    title: string;
    link: string;
    show: boolean;
    intro?: string;
    subMenu: SubMenu[];
}