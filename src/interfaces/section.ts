export interface BaseSection {
    className?: string;
    variant: "image" | "color";
    textStyle: "masked" | "normal";
    contentPosition?: "left" | "center" | "right";
    verticalAlignment?: "top" | "center" | "bottom";
}

export interface ImageSection extends BaseSection {
    imageFolder?: string;
    imageName?: string;
    background?: string;
}

export interface TextContent {
    h1Text?: string;
    subtitle?: string;
}
