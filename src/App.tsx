import React from "react";
import TripList from "./components/TripList";
import Logo from "./components/Logo";
import notificationIcon from "./assets/notification.png";
import chatIcon from "./assets/chat.png";
import profileIcon from "./assets/profile.png";
import appStoreIcon from "./assets/app-store.png";
import googlePlayIcon from "./assets/google-play.png";
import vkIcon from "./assets/vk.png";
import okIcon from "./assets/ok.png";
import telegramIcon from "./assets/telegram.png";

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <div className="header-left">
          <Logo />
          <div className="header-logo-title">
            Лучший способ путешествовать дешевле
          </div>
        </div>
        <div className="header-right">
          <img src={chatIcon} alt="chat" className="icon" />
          <img src={notificationIcon} alt="Notifications" className="icon" />
          <img src={profileIcon} alt="Profile" className="icon" />
        </div>
      </header>
      <main>
        <TripList />
      </main>
      <footer className="app-footer">
        <div className="footer-columns">
          <div className="footer-column">
            <ul className="footer-links">
              <li>O проекте</li>
              <li>Блог</li>
              <li>Безопасность</li>
            </ul>
          </div>
          <div className="footer-column">
            <ul className="footer-links">
              <li>Способы оплаты</li>
              <li>Обратная связь</li>
              <li>Вопросы и ответы</li>
            </ul>
          </div>
          <div className="footer-column">
            <ul className="footer-links">
              <li>Автовокзалы России</li>
              <li>Автобусные направления</li>
              <li>Расписание автобусов</li>
            </ul>
          </div>
          <div className="footer-column">
            <ul className="footer-links">
              <li>Популярные маршруты</li>
              <li>СМИ и Рекламодателям</li>
            </ul>
          </div>
          <div className="footer-column">
            <div className="footer-icons">
              <img src={appStoreIcon} alt="App Store" />
              <img src={googlePlayIcon} alt="Google Play" />
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-social-icons">
              <img src={vkIcon} alt="VK" />
              <img src={okIcon} alt="OK" />
              <img src={telegramIcon} alt="Telegram" />
            </div>
          </div>
        </div>
        <div className="footer-info">
          <p className="footer-info-1">© 2022 OOO «КОНТЕНТ»</p>
          <p className="footer-info-2">
            <a href="#">Политика конфиденциальности</a>
          </p>
          <p className="footer-info-3">
            <a href="#">Пользовательское соглашение</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
