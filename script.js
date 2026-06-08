const form = document.getElementById("researchForm");
const entriesContainer = document.getElementById("entries");
const searchInput = document.getElementById("searchInput");
const roleFilter = document.getElementById("roleFilter");
const clearFiltersButton = document.getElementById("clearFilters");
const researchCount = document.getElementById("researchCount");
const summaryText = document.getElementById("summaryText");
const langToggle = document.getElementById("langToggle");
const brandNameEl = document.getElementById("brandName");
const brandSubEl = document.getElementById("brandSub");
const badgeText = document.getElementById("badgeText");
const eyebrowText = document.getElementById("eyebrowText");
const heroTitle = document.getElementById("heroTitle");
const heroText = document.getElementById("heroText");
const actionPublish = document.getElementById("actionPublish");
const actionBrowse = document.getElementById("actionBrowse");
const panelTitle = document.getElementById("panelTitle");
const listItem1 = document.getElementById("listItem1");
const listItem2 = document.getElementById("listItem2");
const listItem3 = document.getElementById("listItem3");
const panelSummary1 = document.getElementById("panelSummary1");
const panelSummary2 = document.getElementById("panelSummary2");
const panelSummaryStrong1 = document.getElementById("panelSummaryStrong1");
const panelSummaryStrong2 = document.getElementById("panelSummaryStrong2");
const formSectionTitle = document.getElementById("formSectionTitle");
const formSectionDesc = document.getElementById("formSectionDesc");
const labelName = document.getElementById("labelName");
const inputName = document.getElementById("name");
const labelRole = document.getElementById("labelRole");
const roleOptionAll = document.getElementById("roleOptionAll");
const roleOptionLawyer = document.getElementById("roleOptionLawyer");
const roleOptionDoctor = document.getElementById("roleOptionDoctor");
const roleOptionResearcher = document.getElementById("roleOptionResearcher");
const roleOptionOther = document.getElementById("roleOptionOther");
const labelTitle = document.getElementById("labelTitle");
const inputTitle = document.getElementById("title");
const labelAbstract = document.getElementById("labelAbstract");
const abstractInput = document.getElementById("abstract");
const labelFile = document.getElementById("labelFile");
const submitButton = document.getElementById("submitButton");
const publishedTitle = document.getElementById("publishedTitle");
const filterOptionAll = document.getElementById("filterOptionAll");
const filterOptionLawyer = document.getElementById("filterOptionLawyer");
const filterOptionDoctor = document.getElementById("filterOptionDoctor");
const filterOptionResearcher = document.getElementById("filterOptionResearcher");
const filterOptionOther = document.getElementById("filterOptionOther");

const LOCALES = {
  ar: {
    htmlLang: "ar",
    dir: "rtl",
    brandName: "منصة الأبحاث",
    brandSub: "للمحامين ودكاترة الجامعة",
    badgeText: "نسخة تجريبية",
    eyebrowText: "منصة مشتركة",
    heroTitle: "جعل نشر الأبحاث العلمي أسهل وأسرع",
    heroText: "شارك بحثك باسمك ومهنتك، ودع زملاءك يطلعوا على الأبحاث ويحمّلوا الملفات بسهولة.",
    actionPublish: "نشر بحث الآن",
    actionBrowse: "عرض الأبحاث",
    panelTitle: "كيف يعمل الموقع",
    listItem1: "أضف بحثك وملفك.",
    listItem2: "يتم حفظه على الخادم الخاص بك.",
    listItem3: "يصل إليه أي زائر عبر الرابط.",
    panelSummary1: "سهل",
    panelSummaryStrong1: "نشر وتحميل",
    panelSummary2: "آمن",
    panelSummaryStrong2: "خادمك هو المستودع",
    formSectionTitle: "أضِف بحث جديد",
    formSectionDesc: "اكتب بيانات البحث ورفعه مباشرة إلى الخادم.",
    labelName: "الاسم الكامل",
    placeholderName: "اكتب اسمك هنا",
    labelRole: "المهنة",
    roleOptionAll: "اختر",
    roleOptionLawyer: "محامٍ",
    roleOptionDoctor: "دكتور جامعة",
    roleOptionResearcher: "باحث",
    roleOptionOther: "أخرى",
    labelTitle: "عنوان البحث",
    placeholderTitle: "عنوان البحث",
    labelAbstract: "ملخص البحث",
    placeholderAbstract: "اكتب وصفاً موجزاً للبحث",
    labelFile: "تحميل ملف البحث (PDF أو Word)",
    submitButton: "نشر البحث",
    publishedTitle: "الأبحاث المنشورة",
    searchPlaceholder: "ابحث بالاسم أو عنوان البحث",
    filterOptionAll: "كل المهن",
    filterOptionLawyer: "محامٍ",
    filterOptionDoctor: "دكتور جامعة",
    filterOptionResearcher: "باحث",
    filterOptionOther: "أخرى",
    researchCount: "عدد الأبحاث:",
    clearFilters: "إعادة تعيين",
    emptyMessage: "لا يوجد أبحاث حتى الآن. كن أول من ينشر.",
    noMatch: "لا توجد أبحاث تطابق بحثك الحالي.",
    summarySearch: "يمكنك البحث أو تصفية الأبحاث حسب المهنة.",
    delete: "حذف",
    deleteConfirm: "هل تريد حذف هذا البحث فعلاً؟",
    missingFields: "يرجى ملء الاسم، المهنة، واسم البحث.",
    fileSizeMessage: "الملف كبير جداً. الرجاء اختيار ملف أصغر من 10 ميجابايت.",
    submitError: "حدث خطأ أثناء إرسال البحث. حاول مرة أخرى.",
    deleteError: "حدث خطأ أثناء الحذف. حاول مرة أخرى.",
    serverUnavailable: "الخادم غير متاح حالياً.",
    fetchError: "فشل جلب الأبحاث من الخادم.",
    deleteErrorFetch: "فشل حذف البحث.",
    toggleLabel: "EN",
  },
  en: {
    htmlLang: "en",
    dir: "ltr",
    brandName: "Research Platform",
    brandSub: "For Lawyers and University Professors",
    badgeText: "Experimental",
    eyebrowText: "Shared platform",
    heroTitle: "Make research publishing easier and faster",
    heroText: "Publish your paper with your name and profession, and let colleagues view and download it.",
    actionPublish: "Publish Research",
    actionBrowse: "View Papers",
    panelTitle: "How the site works",
    listItem1: "Add your paper and file.",
    listItem2: "It saves to your server.",
    listItem3: "Anyone can reach it through the link.",
    panelSummary1: "Simple",
    panelSummaryStrong1: "Upload & share",
    panelSummary2: "Secure",
    panelSummaryStrong2: "Your server stores it",
    formSectionTitle: "Add New Research",
    formSectionDesc: "Fill in the details and upload directly to the server.",
    labelName: "Full Name",
    placeholderName: "Enter your name",
    labelRole: "Profession",
    roleOptionAll: "Choose",
    roleOptionLawyer: "Lawyer",
    roleOptionDoctor: "University Professor",
    roleOptionResearcher: "Researcher",
    roleOptionOther: "Other",
    labelTitle: "Research Title",
    placeholderTitle: "Enter research title",
    labelAbstract: "Abstract",
    placeholderAbstract: "Enter a brief summary of your research",
    labelFile: "Upload research file (PDF or Word)",
    submitButton: "Publish Research",
    publishedTitle: "Published Research",
    searchPlaceholder: "Search by name or paper title",
    filterOptionAll: "All professions",
    filterOptionLawyer: "Lawyer",
    filterOptionDoctor: "University Professor",
    filterOptionResearcher: "Researcher",
    filterOptionOther: "Other",
    researchCount: "Number of papers:",
    clearFilters: "Reset",
    emptyMessage: "No research yet. Be the first to publish.",
    noMatch: "No papers match your search.",
    summarySearch: "You can search or filter research by profession.",
    delete: "Delete",
    deleteConfirm: "Do you want to delete this paper?",
    missingFields: "Please fill in name, profession, and research title.",
    fileSizeMessage: "File is too large. Use a file under 10MB.",
    submitError: "Error sending the research. Please try again.",
    deleteError: "Error deleting the research. Please try again.",
    serverUnavailable: "The server is currently unavailable.",
    fetchError: "Failed to fetch research from the server.",
    deleteErrorFetch: "Failed to delete the research.",
    toggleLabel: "AR",
  },
};

let currentLang = localStorage.getItem("siteLanguage") || "ar";

function translatePage() {
  const locale = LOCALES[currentLang];
  document.documentElement.lang = locale.htmlLang;
  document.documentElement.dir = locale.dir;
  brandNameEl.textContent = locale.brandName;
  brandSubEl.textContent = locale.brandSub;
  badgeText.textContent = locale.badgeText;
  eyebrowText.textContent = locale.eyebrowText;
  heroTitle.textContent = locale.heroTitle;
  heroText.textContent = locale.heroText;
  actionPublish.textContent = locale.actionPublish;
  actionBrowse.textContent = locale.actionBrowse;
  panelTitle.textContent = locale.panelTitle;
  listItem1.textContent = locale.listItem1;
  listItem2.textContent = locale.listItem2;
  listItem3.textContent = locale.listItem3;
  panelSummary1.textContent = locale.panelSummary1;
  panelSummaryStrong1.textContent = locale.panelSummaryStrong1;
  panelSummary2.textContent = locale.panelSummary2;
  panelSummaryStrong2.textContent = locale.panelSummaryStrong2;
  formSectionTitle.textContent = locale.formSectionTitle;
  formSectionDesc.textContent = locale.formSectionDesc;
  labelName.textContent = locale.labelName;
  labelRole.textContent = locale.labelRole;
  roleOptionAll.textContent = locale.roleOptionAll;
  roleOptionLawyer.textContent = locale.roleOptionLawyer;
  roleOptionDoctor.textContent = locale.roleOptionDoctor;
  roleOptionResearcher.textContent = locale.roleOptionResearcher;
  roleOptionOther.textContent = locale.roleOptionOther;
  labelTitle.textContent = locale.labelTitle;
  inputName.placeholder = locale.placeholderName;
  inputTitle.placeholder = locale.placeholderTitle;
  labelAbstract.textContent = locale.labelAbstract;
  abstractInput.placeholder = locale.placeholderAbstract;
  labelFile.textContent = locale.labelFile;
  submitButton.textContent = locale.submitButton;
  publishedTitle.textContent = locale.publishedTitle;
  searchInput.placeholder = locale.searchPlaceholder;
  filterOptionAll.textContent = locale.filterOptionAll;
  filterOptionLawyer.textContent = locale.filterOptionLawyer;
  filterOptionDoctor.textContent = locale.filterOptionDoctor;
  filterOptionResearcher.textContent = locale.filterOptionResearcher;
  filterOptionOther.textContent = locale.filterOptionOther;
  clearFiltersButton.textContent = locale.clearFilters;
  langToggle.textContent = locale.toggleLabel;
}

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString(currentLang === "ar" ? "ar-EG" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function filterEntries(entries) {
  const searchText = searchInput.value.trim().toLowerCase();
  const roleValue = roleFilter.value;

  return entries.filter((entry) => {
    const matchesRole = !roleValue || entry.role === roleValue;
    const matchesSearch =
      !searchText ||
      entry.name.toLowerCase().includes(searchText) ||
      entry.title.toLowerCase().includes(searchText) ||
      entry.abstract.toLowerCase().includes(searchText);
    return matchesRole && matchesSearch;
  });
}

function renderEntries(entries) {
  const locale = LOCALES[currentLang];
  const filteredEntries = filterEntries(entries);
  entriesContainer.innerHTML = "";
  researchCount.textContent = `${locale.researchCount} ${filteredEntries.length}`;

  if (!entries.length) {
    summaryText.textContent = locale.emptyMessage;
  } else if (!filteredEntries.length) {
    summaryText.textContent = locale.noMatch;
  } else {
    summaryText.textContent = locale.summarySearch;
  }

  if (!filteredEntries.length) {
    entriesContainer.innerHTML = `<p class="empty">${locale.emptyMessage}</p>`;
    return;
  }

  filteredEntries.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "entry";

    const header = document.createElement("header");
    const title = document.createElement("h3");
    title.textContent = entry.title;
    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = `${entry.name} • ${entry.role} • ${formatDate(entry.createdAt)}`;
    header.append(title, meta);

    const abstract = document.createElement("p");
    abstract.textContent = entry.abstract || locale.emptyMessage;

    const controls = document.createElement("div");
    controls.className = "entry-controls";

    if (entry.fileName && entry.fileUrl) {
      const fileLink = document.createElement("a");
      fileLink.href = entry.fileUrl;
      fileLink.textContent = `${currentLang === "ar" ? "تحميل الملف:" : "Download file:"} ${entry.fileName}`;
      controls.appendChild(fileLink);
    }

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = locale.delete;
    deleteButton.type = "button";
    deleteButton.addEventListener("click", () => deleteEntry(entry.id));
    controls.appendChild(deleteButton);

    card.append(header, abstract, controls);
    entriesContainer.appendChild(card);
  });
}

async function fetchEntries() {
  const locale = LOCALES[currentLang];
  try {
    const response = await fetch("/api/research");
    if (!response.ok) {
      throw new Error(locale.fetchError);
    }
    const entries = await response.json();
    renderEntries(entries);
  } catch (error) {
    entriesContainer.innerHTML = `<p class="empty">${locale.serverUnavailable}</p>`;
    summaryText.textContent = locale.serverUnavailable;
    researchCount.textContent = `${locale.researchCount} 0`;
    console.error(error);
  }
}

async function deleteEntry(id) {
  const locale = LOCALES[currentLang];
  if (!confirm(locale.deleteConfirm)) {
    return;
  }

  try {
    const response = await fetch(`/api/research/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(locale.deleteErrorFetch);
    }

    fetchEntries();
  } catch (error) {
    alert(locale.deleteError);
    console.error(error);
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const locale = LOCALES[currentLang];

  const name = form.name.value.trim();
  const role = form.role.value;
  const titleValue = form.title.value.trim();
  const abstract = form.abstract.value.trim();
  const fileInput = form.file.files[0];

  if (!name || !role || !titleValue) {
    alert(locale.missingFields);
    return;
  }

  if (fileInput && fileInput.size > 10 * 1024 * 1024) {
    alert(locale.fileSizeMessage);
    return;
  }

  const formData = new FormData();
  formData.append("name", name);
  formData.append("role", role);
  formData.append("title", titleValue);
  formData.append("abstract", abstract);
  if (fileInput) {
    formData.append("file", fileInput);
  }

  try {
    const response = await fetch("/api/research", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || locale.submitError);
    }

    form.reset();
    fetchEntries();
  } catch (error) {
    alert(locale.submitError);
    console.error(error);
  }
});

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  localStorage.setItem("siteLanguage", currentLang);
  translatePage();
  fetchEntries();
});

clearFiltersButton.addEventListener("click", () => {
  searchInput.value = "";
  roleFilter.value = "";
  fetchEntries();
});

searchInput.addEventListener("input", fetchEntries);
roleFilter.addEventListener("change", fetchEntries);

translatePage();
fetchEntries();
