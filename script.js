const form = document.getElementById("researchForm");
const entriesContainer = document.getElementById("entries");
const searchInput = document.getElementById("searchInput");
const roleFilter = document.getElementById("roleFilter");
const clearFiltersButton = document.getElementById("clearFilters");
const researchCount = document.getElementById("researchCount");
const summaryText = document.getElementById("summaryText");

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString("ar-EG", {
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
  const filteredEntries = filterEntries(entries);
  entriesContainer.innerHTML = "";
  researchCount.textContent = `عدد الأبحاث: ${filteredEntries.length}`;

  if (!entries.length) {
    summaryText.textContent = "لا يوجد أبحاث حتى الآن. كن أول من ينشر.";
  } else if (!filteredEntries.length) {
    summaryText.textContent = "لا توجد أبحاث تطابق بحثك الحالي.";
  } else {
    summaryText.textContent = "يمكنك البحث أو تصفية الأبحاث حسب المهنة.";
  }

  if (!filteredEntries.length) {
    entriesContainer.innerHTML = '<p class="empty">لا يوجد أبحاث حتى الآن. كن أول من ينشر.</p>';
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
    abstract.textContent = entry.abstract || "لم يقدم ملخصاً لكن يمكنك مراسلته لمعرفة المزيد.";

    const controls = document.createElement("div");
    controls.className = "entry-controls";

    if (entry.fileName && entry.fileUrl) {
      const fileLink = document.createElement("a");
      fileLink.href = entry.fileUrl;
      fileLink.textContent = `تحميل الملف: ${entry.fileName}`;
      controls.appendChild(fileLink);
    }

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "حذف";
    deleteButton.type = "button";
    deleteButton.addEventListener("click", () => deleteEntry(entry.id));
    controls.appendChild(deleteButton);

    card.append(header, abstract, controls);
    entriesContainer.appendChild(card);
  });
}

async function fetchEntries() {
  try {
    const response = await fetch("/api/research");
    if (!response.ok) {
      throw new Error("فشل جلب الأبحاث من الخادم.");
    }
    const entries = await response.json();
    renderEntries(entries);
  } catch (error) {
    entriesContainer.innerHTML = `<p class="empty">تعذر الاتصال بالخادم. تأكد من تشغيل الخادم أولاً.</p>`;
    summaryText.textContent = "الخادم غير متاح حالياً.";
    researchCount.textContent = "عدد الأبحاث: 0";
    console.error(error);
  }
}

async function deleteEntry(id) {
  if (!confirm("هل تريد حذف هذا البحث فعلاً؟")) {
    return;
  }

  try {
    const response = await fetch(`/api/research/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("فشل حذف البحث.");
    }

    fetchEntries();
  } catch (error) {
    alert("حدث خطأ أثناء الحذف. حاول مرة أخرى.");
    console.error(error);
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = form.name.value.trim();
  const role = form.role.value;
  const title = form.title.value.trim();
  const abstract = form.abstract.value.trim();
  const fileInput = form.file.files[0];

  if (!name || !role || !title) {
    alert("يرجى ملء الاسم، المهنة، واسم البحث.");
    return;
  }

  if (fileInput && fileInput.size > 10 * 1024 * 1024) {
    alert("الملف كبير جداً. الرجاء اختيار ملف أصغر من 10 ميجابايت.");
    return;
  }

  const formData = new FormData();
  formData.append("name", name);
  formData.append("role", role);
  formData.append("title", title);
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
      throw new Error(error.error || "فشل إرسال البحث.");
    }

    form.reset();
    fetchEntries();
  } catch (error) {
    alert("حدث خطأ أثناء إرسال البحث. حاول مرة أخرى.");
    console.error(error);
  }
});

searchInput.addEventListener("input", fetchEntries);
roleFilter.addEventListener("change", fetchEntries);
clearFiltersButton.addEventListener("click", () => {
  searchInput.value = "";
  roleFilter.value = "";
  fetchEntries();
});

fetchEntries();
