export interface HomeProps {
    setScreen: React.Dispatch<React.SetStateAction<string>>;
    notifications: number;
    setNotifications: React.Dispatch<React.SetStateAction<number>>;
}