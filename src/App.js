import "./App.css";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { language } from "./Services/lang-list";



function App() {
  const { t } = useTranslation();

  const releaseDate = new Date('2022-03-07');
  const timeDifference = new Date() - releaseDate;
  const number_of_days = Math.floor(timeDifference / (1000*60*60*24))

  const loadingMarkup = (
    <h2>Loading...</h2>
  )
  return (
    // Suspense tag wont allow to reflect code
    <Suspense fallback={loadingMarkup}>
      <div className="App">
        <header className="App-header">
         <ul>
         {language.map(item => (
              <li onClick={() => {i18next.changeLanguage(item.code)}}>{item.name}</li>
            ))} 
          </ul>
          <h1>{t("welcome_to_react")}</h1>
          {/* change dynamic number */}
          <p>{t('days_since_release', {number_of_days})}</p>
        </header>
      </div>
    </Suspense>
  );
}

export default App;
