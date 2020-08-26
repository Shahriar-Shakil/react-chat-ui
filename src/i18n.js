import i18n from "i18next";
import {initReactI18next} from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
var initLanguage;
if (localStorage.getItem("systemConfig") !== null) {
  initLanguage = JSON.parse(localStorage.getItem("systemConfig")).language;
}

const resources = {
  en: {
    translation: {
      footer: "copyright 2020, a2i: Access to Information",
      attachment: "Attachment",
      Nothi_jaat: "Nothi jat",
      Nothi_Vukto: "Nothi Vukto",
      Current_Status: "Current Status :",
      pothito: "Read",
      opothito: "Unread",
      onulipi: "Onulipi",
      mul_prapok: "Receiver",
      archive_dak_confirm_msg: "Are you sure to archive this daak?",
      no_subject: "No subject Found",
      delete_onucched : "Delete Onucched",
      edit_onucched : "Edit Onucched",
      create_draft_potro : "Create Draft Potro",
      new_note_confirmation_msg: "Do you want to add new note?",
      khoshra_potro_empty_msg:"No drafted template found",
      noter_potro_empty_msg:"This note has no potro",
      all_potro_empty_msg:"This nothi has no potro",
      nothijato_potro_empty_msg:"There is no nothijato potro",
      potro_print:"Print",
      potro_print_preview:"Print Preview",
      potro_download:"Download",
      potro_draft_history:"Draft History",
      potro_potrojari:"Potrojari",
      potro_approve:"Approve",
      potro_edit:"Edit",
      potro_delete:"Delete",
      potro_endorsement:"Endorsement",
      potro_khoshra:"Khoshra",
      potro_endorsement:"Delete",
      mul_potro:"Mulpotro",
      potro_clone:"ক্লোন",
      search_file: "Search Attachments"
    }
  },
  bn: {
    translation: {
      "No mail found": "কোনো ডাক নেই",
      "Help Desk": "হেল্প ডেস্ক",
      Profile: "প্রোফাইল",
      "Log out": "লগ আউট",
      "Select Designation": "পদবি নির্বাচন করুন",
      "Do you want to return the mail?": "আপনি কি ডাকটি ফেরত আনতে চান ? ",
      "Selected Recipient": "নির্বাচিত প্রাপক",
      Save: "সংরক্ষণ করুন",
      "(No employee found)": "(কোন কর্মকর্তা নেই)",
      Delete: "মুছুন",
      "Error Message": "ত্রুটি সংক্রান্ত বার্তা",
      Subject: "বিষয়",
      "Total Daak To forward": "সর্বমোট ডাক ফরোয়ার্ড",
      "Daak Forward Information": "ডাক ফরোয়ার্ড সংক্রান্ত তথ্য",
      "Back to inbox": "আগত ডাক  লিস্টে ফেরৎ যান",
      no_subject: "কোন বিষয় খুঁজে পাওয়া যায় নি",
      "Selected Daaks": " চিহ্নিত ডাক সমূহ",
      footer: "কপিরাইট ২০২০, একসেস টু ইনফরমেশন",
      Inbox: "আগত ডাক",
      Sent: "প্রেরিত ডাক",
      Nothi_jaat: "নথিজাত ডাক",
      Nothi_Vukto: "নথিতে উপস্থাপিত ডাক",
      attachment: "সংযুক্তি",
      Archive: "আর্কাইভ",
      Previous: "পূর্ববর্তী",
      Next: "পরবর্তী",
      Total: "সর্বমোট",
      Current_Status: "বর্তমান অবস্থা :",
      Yes: "হ্যাঁ",
      No: "না",
      0: "০",
      1: "১",
      2: "২",
      3: "৩",
      4: "৪",
      5: "৫",
      6: "৬",
      7: "৭",
      8: "৮",
      9: "৯",
      pothito: "পঠিত",
      opothito: "অপঠিত",
      onulipi: "অনুলিপি",
      mul_prapok: "মূল-প্রাপক",
      Nagorik: "নাগরিক",
      Daptorik: "দাপ্তরিক",
      Yes: "হ্যা",
      No: "না",
      archive_dak_confirm_msg: "আপনি কি ডাকটি আর্কাইভ করতে ইচ্ছুক?",
      "Changed success on default decison": "ডিফল্ট সিদ্ধান্তে পরিবর্তন হয়েছে",
      delete_onucched : "মুছে ফেলুন",
      edit_onucched : "সংশোধন করুন",
      create_draft_potro : "খসড়া পত্র তৈরি করুন",
      new_note_confirmation_msg: "আপনি কি নতুন নোট তৈরি করতে চান ?",
      khoshra_potro_empty_msg:"কোনো খসড়া পত্র নেই",
      noter_potro_empty_msg:"কোনো নোটের পত্র নেই ",
      all_potro_empty_msg:"কোনো পত্র নেই",
      nothijato_potro_empty_msg:"কোনো নথিজাত পত্র নেই",
      potro_print:"প্রিন্ট",
      potro_print_preview:"প্রিন্ট প্রিভিউ",
      potro_download:"ডাউনলোড",
      potro_draft_history:"খসড়া ইতিহাস",
      potro_potrojari:"পত্রজারি",
      potro_approve:"অনুমোদন",
      potro_edit:"সংশোধন",
      potro_delete:"মুছে ফেলুন",
      mul_potro:"মূল পত্র",
      potro_endorsement:"পৃষ্ঠাঙ্কন",
      potro_clone:"ক্লোন",
      search_file: "সংযুক্তি খুজুন"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: initLanguage !== undefined ? initLanguage : "bn",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
