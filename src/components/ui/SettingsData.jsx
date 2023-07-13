import React from "react";
import { settings } from "../../data/settings";

export const SettingsData = () => {
  return (
    <div className="settings__data">
      {settings.map((item) => {
        return (
          <div className="settings__data__item" key={item.id}>
            <span className="settings__data__item-title">{item.title}</span>
            <span className="settings__data__item-desc">
              {item.description}
            </span>
            <span className="settings__data__item-text">{item.text}</span>
          </div>
        );
      })}
    </div>
  );
};
