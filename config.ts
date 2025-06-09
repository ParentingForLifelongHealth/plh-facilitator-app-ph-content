import { generateDeploymentConfig } from "scripts";
import { loadEncryptedConfig} from "scripts";
const config = generateDeploymentConfig("plh_facilitator_ph");
/**
 * The default config should ideally be a superset of any extended configs
 * to allow for easier post-processing
 */

config.google_drive.sheets_folder_ids =  [
  "1Jo1-q7KOE4gC2XRKEMcU9bXnrwB5oCRC",  //Global
  "1SUErA3iOev9XiOkQfOmmiDHtvnKRY6Go"   //PH Sheets
];

config.google_drive.assets_folder_ids = [
  "1nrj0QSvhVKdUaPFrnCB6CyXSCvpozBDK", 
	"1GA6vgLIC2aPPRzUJkm_albAvPdMa3XUK" //PH assets
];


config.git = {
  content_repo: "https://github.com/IDEMSInternational/plh-facilitator-app-ph-content.git",
  content_tag_latest: "1.2.3",
};

config.android = {
  app_id:'international.idems.plh_facilitator_ph',
  app_name:'MaPa Faci App',
  splash_asset_path: "./app_data/assets/android/splash.png",
  icon_asset_path: "./app_data/assets/android/icon.png",
  icon_asset_foreground_path: "./app_data/assets/android/icon-foreground.png",
  icon_asset_background_path: "./app_data/assets/android/icon-background.png",
  zoom_enabled: true
};

config.ios = {
  app_id:'international.idems.plh_facilitator_ph',
  app_name:'MaPa Faci App',
  zoom_enabled: true
};

config.firebase = {
  config: loadEncryptedConfig('firebase.json')
}

config.auth = {
  provider: 'firebase',
}

config.web.favicon_asset = "images/logos/app_logo.png";

config.api.db_name = "plh_facilitator_ph"
config.app_data.output_path = "./app_data";

config.app_config.APP_LANGUAGES.default = "ph_fil";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "Facilitator PH";
config.app_config.APP_HEADER_DEFAULTS.title = "Facilitator PH";
config.app_config.APP_HEADER_DEFAULTS.hidden = true;
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from Facilitator PH";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from Facilitator PH";
config.app_config.APP_THEMES.available = ["default", "professional"];
config.app_config.APP_THEMES.defaultThemeName = "professional";
config.app_config.APP_UPDATES.enabled = true;
config.app_config.APP_UPDATES.completeUpdateTemplate = "app_update_complete";
config.app_config.APP_FOOTER_DEFAULTS.templateName = "footer";
config.app_config.APP_THEMES.available = ["plh_facilitator_mapa"];
config.app_config.APP_THEMES.defaultThemeName = "plh_facilitator_mapa";


config.error_logging = { dsn: "https://ca84802206d44c49b553c7dfc68b5e0e@app.glitchtip.com/6093"};

export default config;
