type TranslationKeyId = 'welcome_title' | 'welcome_text' | 'info_text' | 'info_hint';

type Language = 'de' | 'en';

type TranslationKey = `${TranslationKeyId}_${Language}`;

// Should Work
const germanTranslationKey: TranslationKey = 'info_hint_de';
const englishTranslationKey: TranslationKey = 'info_hint_en';

// Should NOT work
const errorTranslationKey: TranslationKey = 'info_hint_error'

export {}
