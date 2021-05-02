export interface FooterPropsInterface {
    setLang: React.Dispatch<React.SetStateAction<string | undefined>>;
    setAnimations: React.Dispatch<React.SetStateAction<boolean>>;
    animations: boolean;
}