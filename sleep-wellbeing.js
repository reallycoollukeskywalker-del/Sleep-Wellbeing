const sleepDataset = [
  {
    date: "2025-10-01",
    schoolDay: true,
    bedtime: "23:50",
    wakeTime: "6:30",
    totalSleep: 6.67,
    screenBeforeBed: true,
    caffeineAfterFour: true,
    sleepScore: 4,
    focus: 2
  },
  {
    date: "2025-10-02",
    schoolDay: true,
    bedtime: "23:45",
    wakeTime: "6:30",
    totalSleep: 6.75,
    screenBeforeBed: true,
    caffeineAfterFour: true,
    sleepScore: 4.5,
    focus: 2
  },
  {
    date: "2025-10-03",
    schoolDay: true,
    bedtime: "23:40",
    wakeTime: "6:30",
    totalSleep: 6.83,
    screenBeforeBed: true,
    caffeineAfterFour: true,
    sleepScore: 4.5,
    focus: 2
  },
  {
    date: "2025-10-04",
    schoolDay: true,
    bedtime: "23:35",
    wakeTime: "6:30",
    totalSleep: 6.92,
    screenBeforeBed: true,
    caffeineAfterFour: true,
    sleepScore: 5,
    focus: 2
  },
  {
    date: "2025-10-05",
    schoolDay: true,
    bedtime: "23:30",
    wakeTime: "6:30",
    totalSleep: 7,
    screenBeforeBed: true,
    caffeineAfterFour: false,
    sleepScore: 5.5,
    focus: 2
  },
  {
    date: "2025-10-06",
    schoolDay: false,
    bedtime: "23:25",
    wakeTime: "8:00",
    totalSleep: 8.58,
    screenBeforeBed: false,
    caffeineAfterFour: false,
    sleepScore: 9,
    focus: null
  },
  {
    date: "2025-10-07",
    schoolDay: false,
    bedtime: "23:20",
    wakeTime: "8:00",
    totalSleep: 8.67,
    screenBeforeBed: true,
    caffeineAfterFour: true,
    sleepScore: 9.5,
    focus: null
  },
  {
    date: "2025-10-08",
    schoolDay: true,
    bedtime: "23:15",
    wakeTime: "6:30",
    totalSleep: 7.25,
    screenBeforeBed: false,
    caffeineAfterFour: false,
    sleepScore: 7.3,
    focus: 2
  },
  {
    date: "2025-10-09",
    schoolDay: true,
    bedtime: "23:10",
    wakeTime: "6:30",
    totalSleep: 7.33,
    screenBeforeBed: true,
    caffeineAfterFour: true,
    sleepScore: 7.3,
    focus: 2
  },
  {
    date: "2025-10-10",
    schoolDay: true,
    bedtime: "23:05",
    wakeTime: "6:30",
    totalSleep: 7.42,
    screenBeforeBed: false,
    caffeineAfterFour: false,
    sleepScore: 7.4,
    focus: 3
  },
  {
    date: "2025-10-11",
    schoolDay: true,
    bedtime: "23:00",
    wakeTime: "6:30",
    totalSleep: 7.5,
    screenBeforeBed: true,
    caffeineAfterFour: true,
    sleepScore: 7.5,
    focus: 2
  },
  {
    date: "2025-10-12",
    schoolDay: true,
    bedtime: "22:55",
    wakeTime: "6:30",
    totalSleep: 7.58,
    screenBeforeBed: false,
    caffeineAfterFour: false,
    sleepScore: 7.6,
    focus: 2
  },
  {
    date: "2025-10-13",
    schoolDay: false,
    bedtime: "22:50",
    wakeTime: "8:00",
    totalSleep: 9.17,
    screenBeforeBed: true,
    caffeineAfterFour: false,
    sleepScore: 7.7,
    focus: null
  },
  {
    date: "2025-10-14",
    schoolDay: false,
    bedtime: "22:45",
    wakeTime: "8:00",
    totalSleep: 9.25,
    screenBeforeBed: false,
    caffeineAfterFour: true,
    sleepScore: 7.8,
    focus: null
  },
  {
    date: "2025-10-15",
    schoolDay: true,
    bedtime: "22:40",
    wakeTime: "6:30",
    totalSleep: 7.83,
    screenBeforeBed: false,
    caffeineAfterFour: false,
    sleepScore: 7.9,
    focus: 3
  },
  {
    date: "2025-10-16",
    schoolDay: true,
    bedtime: "22:35",
    wakeTime: "6:30",
    totalSleep: 7.92,
    screenBeforeBed: false,
    caffeineAfterFour: false,
    sleepScore: 8,
    focus: 3
  },
  {
    date: "2025-10-17",
    schoolDay: true,
    bedtime: "22:30",
    wakeTime: "6:30",
    totalSleep: 8,
    screenBeforeBed: false,
    caffeineAfterFour: true,
    sleepScore: 8.1,
    focus: 4
  },
  {
    date: "2025-10-18",
    schoolDay: true,
    bedtime: "22:25",
    wakeTime: "6:30",
    totalSleep: 8.08,
    screenBeforeBed: false,
    caffeineAfterFour: false,
    sleepScore: 8.2,
    focus: 3
  },
  {
    date: "2025-10-19",
    schoolDay: true,
    bedtime: "22:20",
    wakeTime: "6:30",
    totalSleep: 8.17,
    screenBeforeBed: false,
    caffeineAfterFour: false,
    sleepScore: 8.3,
    focus: 3
  },
  {
    date: "2025-10-20",
    schoolDay: false,
    bedtime: "22:15",
    wakeTime: "8:00",
    totalSleep: 9.75,
    screenBeforeBed: true,
    caffeineAfterFour: true,
    sleepScore: 8.3,
    focus: null
  },
  {
    date: "2025-10-21",
    schoolDay: false,
    bedtime: "22:10",
    wakeTime: "8:00",
    totalSleep: 9.83,
    screenBeforeBed: false,
    caffeineAfterFour: false,
    sleepScore: 8.4,
    focus: null
  },
  {
    date: "2025-10-22",
    schoolDay: true,
    bedtime: "22:05",
    wakeTime: "6:30",
    totalSleep: 8.42,
    screenBeforeBed: false,
    caffeineAfterFour: true,
    sleepScore: 8.5,
    focus: 4
  },
  {
    date: "2025-10-23",
    schoolDay: true,
    bedtime: "22:00",
    wakeTime: "6:30",
    totalSleep: 8.5,
    screenBeforeBed: false,
    caffeineAfterFour: false,
    sleepScore: 8.5,
    focus: 4
  },
  {
    date: "2025-10-24",
    schoolDay: true,
    bedtime: "21:55",
    wakeTime: "6:30",
    totalSleep: 8.58,
    screenBeforeBed: false,
    caffeineAfterFour: false,
    sleepScore: 8.6,
    focus: 4
  },
  {
    date: "2025-10-25",
    schoolDay: true,
    bedtime: "21:50",
    wakeTime: "6:30",
    totalSleep: 8.67,
    screenBeforeBed: false,
    caffeineAfterFour: false,
    sleepScore: 8.7,
    focus: 4
  },
  {
    date: "2025-10-26",
    schoolDay: true,
    bedtime: "21:45",
    wakeTime: "6:30",
    totalSleep: 8.75,
    screenBeforeBed: false,
    caffeineAfterFour: true,
    sleepScore: 8.8,
    focus: 4
  },
  {
    date: "2025-10-27",
    schoolDay: false,
    bedtime: "21:40",
    wakeTime: "7:30",
    totalSleep: 9.83,
    screenBeforeBed: false,
    caffeineAfterFour: false,
    sleepScore: 8.8,
    focus: null
  },
  {
    date: "2025-10-28",
    schoolDay: false,
    bedtime: "21:35",
    wakeTime: "7:30",
    totalSleep: 9.92,
    screenBeforeBed: false,
    caffeineAfterFour: false,
    sleepScore: 8.9,
    focus: null
  }
];

const average = (values) =>
  values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;

const round = (value, digits = 2) => Number(value.toFixed(digits));

function groupIntoWeeks(items, size) {
  const groups = [];

  for (let index = 0; index < items.length; index += size) {
    groups.push(items.slice(index, index + size));
  }

  return groups;
}

function minutesFromTime(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function formatTime(minutesTotal) {
  const hours = Math.floor(minutesTotal / 60);
  const minutes = minutesTotal % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function shortDate(dateString) {
  const [, month, day] = dateString.split("-");
  return `${Number(month)}/${Number(day)}`;
}

function formatHours(value, digits = 2) {
  return `${value.toFixed(digits)}h`;
}

function formatShift(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${String(mins).padStart(2, "0")}m earlier`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function interpolateValue(x, points) {
  if (points.length === 1) {
    return points[0][1];
  }

  const interpolateBetween = (x1, y1, x2, y2) => y1 + ((x - x1) * (y2 - y1)) / (x2 - x1);

  if (x <= points[0][0]) {
    const [x1, y1] = points[0];
    const [x2, y2] = points[1];
    return interpolateBetween(x1, y1, x2, y2);
  }

  for (let index = 0; index < points.length - 1; index += 1) {
    const [x1, y1] = points[index];
    const [x2, y2] = points[index + 1];

    if (x >= x1 && x <= x2) {
      return interpolateBetween(x1, y1, x2, y2);
    }
  }

  const [x1, y1] = points[points.length - 2];
  const [x2, y2] = points[points.length - 1];
  return interpolateBetween(x1, y1, x2, y2);
}

function impactBandLabel(hours) {
  if (hours < 7) {
    return "Lower range";
  }

  if (hours < 8) {
    return "Improving range";
  }

  if (hours < 9) {
    return "Strong range";
  }

  return "Peak range";
}

function impactScoreLabel(score) {
  if (score >= 8.4) {
    return "Strong";
  }

  if (score >= 7.1) {
    return "Steady";
  }

  if (score >= 5.8) {
    return "Mixed";
  }

  return "Low";
}

function buildTrackerSummary() {
  const sleepHours = sleepDataset.map((entry) => entry.totalSleep);
  const schoolDays = sleepDataset.filter((entry) => entry.schoolDay);
  const nonSchoolDays = sleepDataset.filter((entry) => !entry.schoolDay);
  const screenYes = sleepDataset.filter((entry) => entry.screenBeforeBed);
  const screenNo = sleepDataset.filter((entry) => !entry.screenBeforeBed);
  const caffeineYes = sleepDataset.filter((entry) => entry.caffeineAfterFour);
  const caffeineNo = sleepDataset.filter((entry) => !entry.caffeineAfterFour);
  const focusValues = sleepDataset
    .map((entry) => entry.focus)
    .filter((value) => value !== null);
  const weeks = groupIntoWeeks(sleepDataset, 7).map((week, index) => {
    const focusWeek = week.map((entry) => entry.focus).filter((value) => value !== null);
    const bedtimeAverage = Math.round(
      average(week.map((entry) => minutesFromTime(entry.bedtime)))
    );

    return {
      label: `Week ${index + 1}`,
      range: `${shortDate(week[0].date)}-${shortDate(week[week.length - 1].date)}`,
      averageSleep: round(average(week.map((entry) => entry.totalSleep))),
      averageFocus: focusWeek.length ? round(average(focusWeek), 1) : null,
      averageSleepScore: round(average(week.map((entry) => entry.sleepScore)), 1),
      averageBedtime: formatTime(bedtimeAverage)
    };
  });

  return {
    trackedDays: sleepDataset.length,
    schoolDays: schoolDays.length,
    averageSleep: round(average(sleepHours)),
    minSleep: Math.min(...sleepHours),
    maxSleep: Math.max(...sleepHours),
    schoolDayAverage: round(average(schoolDays.map((entry) => entry.totalSleep))),
    nonSchoolAverage: round(average(nonSchoolDays.map((entry) => entry.totalSleep))),
    screenYesAverage: round(average(screenYes.map((entry) => entry.totalSleep))),
    screenNoAverage: round(average(screenNo.map((entry) => entry.totalSleep))),
    caffeineYesAverage: round(average(caffeineYes.map((entry) => entry.totalSleep))),
    caffeineNoAverage: round(average(caffeineNo.map((entry) => entry.totalSleep))),
    averageSleepScore: round(average(sleepDataset.map((entry) => entry.sleepScore))),
    averageFocus: round(average(focusValues), 2),
    lateScreenCount: screenYes.length,
    lateCaffeineCount: caffeineYes.length,
    bedtimeShiftMinutes:
      minutesFromTime(sleepDataset[0].bedtime) -
      minutesFromTime(sleepDataset[sleepDataset.length - 1].bedtime),
    weeks,
    firstWeekAverage: weeks[0].averageSleep,
    finalWeekAverage: weeks[weeks.length - 1].averageSleep,
    weeklyGain: round(weeks[weeks.length - 1].averageSleep - weeks[0].averageSleep)
  };
}

const trackerSummary = buildTrackerSummary();

const siteContent = {
  navigation: [
    { label: "Project", href: "#project" },
    { label: "Research", href: "#research" },
    { label: "Tracker", href: "#tracker" },
    { label: "Process", href: "#process" },
    { label: "Tips", href: "#tips" },
    { label: "Reflection", href: "#reflection" },
    { label: "Sources", href: "#sources" }
  ],
  heroBadges: [
    { label: "Student-focused website", href: "#project" },
    { label: "4-week tracker data", href: "#tracker" },
    { label: "Research + reflection", href: "#research" },
    { label: "Practical sleep tips", href: "#tips" }
  ],
  impactCards: [
    {
      kicker: "Focus",
      title: "Sleep changes how clearly students can think.",
      text:
        "Better sleep supports attention, memory, and concentration. When sleep drops, schoolwork often feels harder even before students notice why."
    },
    {
      kicker: "Mood",
      title: "Sleep affects emotional balance throughout the day.",
      text:
        "My project linked sleep with irritability, stress, and daily mood. Research also shows that emotional regulation becomes harder when sleep quality is poor."
    },
    {
      kicker: "Wellbeing",
      title: "Sleep is not extra. It is foundational.",
      text:
        "Energy, motivation, routine, and health are all shaped by sleep habits. That is why small nighttime choices can have outsized effects the next day."
    }
  ],
  projectCards: [
    {
      kicker: "Learning goal",
      title: "Understand how sleep habits affect daily functioning.",
      text:
        "I wanted to learn the science of sleep, observe those ideas in my own routine, and turn the results into advice that would actually help other students."
    },
    {
      kicker: "Product goal",
      title: "Create a free website that is clear and useful.",
      text:
        "The final product needed to explain sleep simply, use data and charts well, stay understandable for teenagers, and remain free so anyone could access it."
    },
    {
      kicker: "Global context",
      title: "Identities and relationships through health and wellbeing.",
      text:
        "The project shows how everyday habits shape personal health and how that understanding can be shared to improve the lives of other students."
    }
  ],
  researchCards: [
    {
      kicker: "Sleep duration",
      title: "Teenagers generally need 8 to 10 hours of sleep.",
      text:
        "Research from the National Sleep Foundation helped set the benchmark for what healthy sleep should look like and why many students fall short of it.",
      source: "Hirshkowitz et al. and Sleep Foundation"
    },
    {
      kicker: "Adolescents",
      title: "Teen sleep problems are not just about laziness.",
      text:
        "Judith Owens explains that adolescent biology, school schedules, and habits all work together to make consistent sleep harder for teenagers.",
      source: "Owens, Sleep Medicine Clinics"
    },
    {
      kicker: "Mental health",
      title: "Sleep and emotional wellbeing influence each other.",
      text:
        "Harvard Medical School helped support the connection between sleep, mood, and emotional regulation, which is one reason this topic matters beyond school performance.",
      source: "Harvard Health Publishing"
    },
    {
      kicker: "Science to advice",
      title: "Clear explanations make better advice.",
      text:
        "Matthew Walker's writing gave useful science that could be translated into language students would understand instead of dense technical wording.",
      source: "Walker, Why We Sleep"
    }
  ],
  timeline: [
    {
      title: "Set up a reliable tracker",
      text:
        "I built a Google Sheets system so bedtime, wake time, caffeine intake, and focus could be recorded consistently."
    },
    {
      title: "Collect data for one month",
      text:
        "The goal was to gather enough entries to notice patterns rather than rely on a few isolated tired days."
    },
    {
      title: "Research outside sources at the same time",
      text:
        "Medical and academic sources created the scientific background that my own tracker data could be compared against."
    },
    {
      title: "Analyze patterns and connect findings",
      text:
        "I compared personal observations with sleep recommendations, mental-health research, and adolescent sleep challenges."
    },
    {
      title: "Design the website and improve it",
      text:
        "The final step was turning the information into a clear student-friendly product, then testing it for clarity and usefulness."
    }
  ],
  skills: [
    {
      type: "ATL skill",
      title: "Research",
      text:
        "I used credible medical and academic sources so the project was built on evidence rather than personal opinion alone."
    },
    {
      type: "ATL skill",
      title: "Critical thinking",
      text:
        "The project required comparing my sleep habits with recommendations and deciding which patterns were meaningful or limited."
    },
    {
      type: "ATL skill",
      title: "Self-management",
      text:
        "Collecting data over time, tracking sources, and steadily building the website required sustained organization."
    },
    {
      type: "ATL skill",
      title: "Communication",
      text:
        "I had to translate technical research into direct, understandable advice that would actually make sense to students."
    }
  ],
  tipFilters: ["All", "Routine", "School", "Wind down", "Tracking"],
  tips: [
    {
      category: "Routine",
      title: "Keep your wake time as consistent as possible.",
      text:
        "A stable wake time is often easier to protect than a perfect bedtime, and it helps your body settle into a clearer rhythm.",
      why:
        "Consistency makes it easier to fall asleep and reduces the feeling of being out of sync during the school week."
    },
    {
      category: "Wind down",
      title: "Cut caffeine earlier in the day.",
      text:
        "If caffeine shows up late in the afternoon or evening, it can quietly push sleep later even when you still feel tired.",
      why:
        "This matches both the research focus of the project and my own observation that caffeine timing affected the next day."
    },
    {
      category: "School",
      title: "Protect sleep before your hardest academic days.",
      text:
        "Not every night will be perfect, but it helps to prioritize sleep before exams, presentations, or days that demand extra focus.",
      why:
        "Sleep influences attention and concentration, so it supports performance before the school day even starts."
    },
    {
      category: "Wind down",
      title: "Use the last hour before bed to slow down, not speed up.",
      text:
        "Choose habits that lower stimulation instead of adding more stress, noise, or late-night rushing.",
      why:
        "The project showed that sleep is shaped by routine, not just total hours, so how the night ends matters too."
    },
    {
      category: "Tracking",
      title: "Track habits instead of guessing how they affect you.",
      text:
        "Even a simple sheet with bedtime, wake time, and focus can reveal patterns that are hard to notice from memory alone.",
      why:
        "The tracker made the problem feel real and gave me evidence I could compare with outside research."
    },
    {
      category: "Routine",
      title: "Aim for enough sleep, not just surviving on less.",
      text:
        "Students often normalize being tired, but recommended sleep targets exist for a reason and are worth treating seriously.",
      why:
        "National Sleep Foundation benchmarks helped set a clearer standard for what healthy sleep should actually look like."
    },
    {
      category: "School",
      title: "Translate research into simple steps you can maintain.",
      text:
        "Complicated advice is easy to ignore. Start with one small habit change, test it, and reflect on the result.",
      why:
        "That approach mirrors the structure of the project itself: observe, compare, adjust, and improve."
    },
    {
      category: "Tracking",
      title: "Collect more data if you want stronger conclusions.",
      text:
        "A month can show patterns, but a longer stretch makes trends more reliable and easier to explain.",
      why:
        "My reflection identified a three-month dataset as the next improvement for a stronger final product."
    }
  ],
  reflections: [
    {
      kicker: "Personal impact",
      title: "Sleep became something active, not passive.",
      text:
        "Tracking sleep made me notice how bedtime choices, wake times, and caffeine affect the next day. Sleep stopped feeling like background life and started feeling like a foundation."
    },
    {
      kicker: "Learning growth",
      title: "The project improved how I use evidence.",
      text:
        "Instead of depending on assumptions, I learned to compare observations with research and reflect on whether the evidence actually supported my conclusions."
    },
    {
      kicker: "Next version",
      title: "A stronger product would start testing earlier.",
      text:
        "If I restarted, I would collect data for longer, structure the site earlier, and bring audience feedback into the process sooner rather than near the end."
    }
  ],
  criteria: [
    {
      title: "Form",
      status: "Complete",
      detail:
        "The website has a clean, organized layout with clear sections, visual hierarchy, and chart space that supports the topic effectively."
    },
    {
      title: "Function",
      status: "Complete",
      detail:
        "The site explains how sleep affects focus, mood, and wellbeing using research, tracked data, and practical advice in a finished format."
    },
    {
      title: "Audience",
      status: "Complete",
      detail:
        "The language, examples, and layout are direct and student-friendly, making the content understandable and relevant for teenagers."
    },
    {
      title: "Cost",
      status: "Complete",
      detail:
        "The project stayed free by using existing tools like a laptop, Google Sheets, and Google Sites, which made the product realistic and sustainable."
    }
  ],
  sources: [
    {
      title: "Harvard Medical School. “Sleep and Mental Health.”",
      text:
        "Harvard Health Publishing article used to support the connection between sleep, emotional regulation, and mental wellbeing.",
      link: "https://www.health.harvard.edu/newsletter_article/sleep-and-mental-health"
    },
    {
      title: "Hirshkowitz, Max, et al. “National Sleep Foundation’s Sleep Time Duration Recommendations.”",
      text:
        "Peer-reviewed source that helped establish the recommended sleep range used throughout the project.",
      link: "https://doi.org/10.1016/j.sleh.2014.12.010"
    },
    {
      title: "National Sleep Foundation. “How Much Sleep Do We Really Need?”",
      text:
        "Practical benchmark source that helped support the student-facing explanations of healthy sleep duration.",
      link: "https://www.sleepfoundation.org/how-sleep-works/how-much-sleep-do-we-really-need"
    },
    {
      title: "Owens, Judith A. “Insufficient Sleep in Adolescents: Causes and Consequences.”",
      text:
        "Medical article that directly supported the focus on teenagers and the specific sleep challenges they face.",
      link: "https://doi.org/10.1016/j.jsmc.2014.05.009"
    },
    {
      title: "Walker, Matthew. Why We Sleep: Unlocking the Power of Sleep and Dreams.",
      text:
        "Book used to explain sleep science clearly and turn more technical ideas into understandable advice.",
      link: "https://www.simonandschuster.com/books/Why-We-Sleep/Matthew-Walker/9781501144325"
    }
  ]
};

const progress = {
  collectedWeeks: 4,
  goalWeeks: 12
};

const refs = {
  nav: document.getElementById("site-nav"),
  heroBadges: document.getElementById("hero-badges"),
  quickStats: document.getElementById("tracker-quick-stats"),
  impactGrid: document.getElementById("impact-grid"),
  projectGrid: document.getElementById("project-grid"),
  researchGrid: document.getElementById("research-grid"),
  evidenceGrid: document.getElementById("evidence-grid"),
  trackerMetrics: document.getElementById("tracker-metrics"),
  dataFindings: document.getElementById("data-findings"),
  sleepChart: document.getElementById("sleep-chart"),
  weekCards: document.getElementById("week-cards"),
  sleepImpactRange: document.getElementById("sleep-impact-range"),
  sleepImpactValue: document.getElementById("sleep-impact-value"),
  sleepImpactNote: document.getElementById("sleep-impact-note"),
  sleepImpactScreen: document.getElementById("sleep-impact-screen"),
  sleepImpactCaffeine: document.getElementById("sleep-impact-caffeine"),
  sleepImpactResults: document.getElementById("sleep-impact-results"),
  sleepImpactSummary: document.getElementById("sleep-impact-summary"),
  timeline: document.getElementById("timeline"),
  skillsGrid: document.getElementById("skills-grid"),
  tipFilters: document.getElementById("tip-filters"),
  tipsGrid: document.getElementById("tips-grid"),
  reflectionGrid: document.getElementById("reflection-grid"),
  criteriaGrid: document.getElementById("criteria-grid"),
  sourcesList: document.getElementById("sources-list"),
  progressFill: document.getElementById("progress-fill"),
  progressCopy: document.getElementById("progress-copy"),
  scrollProgress: document.querySelector(".scroll-progress"),
  navToggle: document.querySelector(".nav-toggle")
};

let activeTipFilter = "All";

const createMarkupList = (items, renderer) => items.map(renderer).join("");

function renderNavigation() {
  refs.nav.innerHTML = createMarkupList(
    siteContent.navigation,
    (item) => `<a href="${item.href}">${item.label}</a>`
  );
}

function renderHero() {
  const heroStats = [
    { value: `${trackerSummary.trackedDays} days`, label: "tracked in the sleep log" },
    { value: formatHours(trackerSummary.averageSleep), label: "average nightly sleep" },
    { value: `+${formatHours(trackerSummary.weeklyGain)}`, label: "from week 1 to week 4" }
  ];

  refs.heroBadges.innerHTML = createMarkupList(
    siteContent.heroBadges,
    (badge) => `
      <li>
        <a class="hero__badge-link" href="${badge.href}">${badge.label}</a>
      </li>
    `
  );

  refs.quickStats.innerHTML = createMarkupList(
    heroStats,
    (item) => `
      <div class="hero-stat">
        <strong>${item.value}</strong>
        <span>${item.label}</span>
      </div>
    `
  );
}

function renderCoreCards() {
  refs.impactGrid.innerHTML = createMarkupList(
    siteContent.impactCards,
    (card) => `
      <article class="impact-card reveal">
        <span class="card-kicker">${card.kicker}</span>
        <h3>${card.title}</h3>
        <p>${card.text}</p>
      </article>
    `
  );

  refs.projectGrid.innerHTML = createMarkupList(
    siteContent.projectCards,
    (card) => `
      <article class="feature-card reveal">
        <span class="card-kicker">${card.kicker}</span>
        <h3>${card.title}</h3>
        <p>${card.text}</p>
      </article>
    `
  );

  refs.researchGrid.innerHTML = createMarkupList(
    siteContent.researchCards,
    (card) => `
      <article class="research-card reveal">
        <span class="card-kicker">${card.kicker}</span>
        <h3>${card.title}</h3>
        <p>${card.text}</p>
        <span class="muted-label">${card.source}</span>
      </article>
    `
  );
}

function renderTrackerSection() {
  const evidenceCards = [
    {
      kicker: "Tracked days",
      value: String(trackerSummary.trackedDays),
      text: "The 4-week tracker recorded 28 entries from the first day to the last."
    },
    {
      kicker: "Average sleep",
      value: formatHours(trackerSummary.averageSleep),
      text: "Across the full tracker, the nightly average came out to 8.18 hours."
    },
    {
      kicker: "School-day average",
      value: formatHours(trackerSummary.schoolDayAverage),
      text: `Non-school days averaged ${formatHours(trackerSummary.nonSchoolAverage)}, showing a clear gap in routine.`
    },
    {
      kicker: "Week 4 average",
      value: formatHours(trackerSummary.finalWeekAverage),
      text: `Week 1 started at ${formatHours(trackerSummary.firstWeekAverage)}, then climbed each week.`
    }
  ];

  const trackerMetrics = [
    {
      title: "Bedtime pattern",
      text: `Bedtime moved from 23:50 on the first entry to 21:35 by the last one, or about ${formatShift(trackerSummary.bedtimeShiftMinutes)}.`
    },
    {
      title: "Wake time pattern",
      text: "School-day wake times stayed mostly at 6:30, while non-school days usually shifted to 8:00 or 7:30."
    },
    {
      title: "Late screen use",
      text: `The tracker marked screen use in the last 30 minutes on ${trackerSummary.lateScreenCount} nights.`
    },
    {
      title: "Late caffeine",
      text: `Caffeine after 16:00 appeared on ${trackerSummary.lateCaffeineCount} nights, making it a habit worth comparing.`
    }
  ];

  const dataFindings = [
    {
      title: "Weekly sleep kept rising.",
      text: `The weekly average went from ${formatHours(trackerSummary.firstWeekAverage)} in week 1 to ${formatHours(trackerSummary.finalWeekAverage)} in week 4.`
    },
    {
      title: "Late-screen nights were shorter.",
      text: `Nights with screen use in the last 30 minutes averaged ${formatHours(trackerSummary.screenYesAverage)}, compared with ${formatHours(trackerSummary.screenNoAverage)} without it.`
    },
    {
      title: "Late caffeine also aligned with less sleep.",
      text: `After-16:00 caffeine nights averaged ${formatHours(trackerSummary.caffeineYesAverage)}, while no-late-caffeine nights averaged ${formatHours(trackerSummary.caffeineNoAverage)}.`
    },
    {
      title: "Focus improved by the end of the tracker.",
      text: `Average class focus rose from ${trackerSummary.weeks[0].averageFocus}/5 in week 1 to ${trackerSummary.weeks[3].averageFocus}/5 in week 4.`
    }
  ];

  refs.evidenceGrid.innerHTML = createMarkupList(
    evidenceCards,
    (card) => `
      <article class="evidence-card reveal">
        <span class="card-kicker">${card.kicker}</span>
        <strong>${card.value}</strong>
        <p>${card.text}</p>
      </article>
    `
  );

  refs.trackerMetrics.innerHTML = createMarkupList(
    trackerMetrics,
    (item) => `
      <div class="metric-row">
        <strong>${item.title}</strong>
        <span>${item.text}</span>
      </div>
    `
  );

  refs.dataFindings.innerHTML = createMarkupList(
    dataFindings,
    (item) => `
      <li class="finding-item">
        <strong>${item.title}</strong>
        <span>${item.text}</span>
      </li>
    `
  );

  refs.weekCards.innerHTML = createMarkupList(
    trackerSummary.weeks,
    (week) => `
      <article class="week-card">
        <div class="week-card__top">
          <span class="week-card__label">${week.label}</span>
          <span class="week-card__label">${week.range}</span>
        </div>
        <strong>${formatHours(week.averageSleep)}</strong>
        <p>Average bedtime: ${week.averageBedtime}</p>
        <p>Average sleep score: ${week.averageSleepScore}/10</p>
        <p>${week.averageFocus !== null ? `Average focus: ${week.averageFocus}/5` : "No class-focus data recorded"}</p>
      </article>
    `
  );

  renderSleepChart();
}

function updateSleepImpactTool() {
  const selectedHours = Number(refs.sleepImpactRange.value);
  const screenPenalty = refs.sleepImpactScreen.checked ? 0.35 : 0;
  const caffeinePenalty = refs.sleepImpactCaffeine.checked ? 0.3 : 0;
  const effectiveHours = clamp(selectedHours - screenPenalty - caffeinePenalty, 5.4, 10);
  const sleepScorePoints = trackerSummary.weeks.map((week) => [week.averageSleep, week.averageSleepScore]);
  const focusPoints = trackerSummary.weeks
    .filter((week) => week.averageFocus !== null)
    .map((week) => [week.averageSleep, week.averageFocus]);

  const predictedSleepScore = clamp(interpolateValue(effectiveHours, sleepScorePoints), 4, 9.3);
  const predictedFocus = clamp(interpolateValue(effectiveHours, focusPoints), 1.8, 4.3);
  const mood = clamp(round(predictedSleepScore - (refs.sleepImpactScreen.checked ? 0.2 : 0), 1), 3.8, 9.3);
  const concentration = clamp(
    round((predictedFocus / 5) * 10 - (refs.sleepImpactScreen.checked ? 0.2 : 0) - (refs.sleepImpactCaffeine.checked ? 0.15 : 0), 1),
    3.5,
    9
  );
  const energy = clamp(
    round(((effectiveHours - 5.5) / 4.5) * 5 + 4.1 - (refs.sleepImpactCaffeine.checked ? 0.15 : 0), 1),
    3.2,
    9.4
  );
  const dailyPerformance = clamp(round((mood + concentration + energy) / 3, 1), 3.6, 9.2);

  const outcomes = [
    {
      label: "Mood",
      score: mood,
      detail: "Emotional balance and patience through the day"
    },
    {
      label: "Concentration",
      score: concentration,
      detail: "Attention during class, study time, and tasks"
    },
    {
      label: "Energy",
      score: energy,
      detail: "How awake and ready the day may feel"
    },
    {
      label: "Daily performance",
      score: dailyPerformance,
      detail: "Overall effect on routines, work, and school"
    }
  ];

  refs.sleepImpactValue.textContent = formatHours(selectedHours, 1);
  refs.sleepImpactNote.textContent = `${impactBandLabel(effectiveHours)} after habits`;

  refs.sleepImpactResults.innerHTML = createMarkupList(
    outcomes,
    (outcome) => `
      <article class="impact-result">
        <div class="impact-result__top">
          <span>${outcome.label}</span>
          <strong>${outcome.score.toFixed(1)}/10</strong>
        </div>
        <div class="impact-result__track" aria-hidden="true">
          <div class="impact-result__fill" style="width: ${outcome.score * 10}%"></div>
        </div>
        <p>${impactScoreLabel(outcome.score)}: ${outcome.detail}</p>
      </article>
    `
  );

  const notes = [];

  if (effectiveHours < 7) {
    notes.push("This lines up with the weaker end of my tracker, where the day would likely feel heavier and harder to focus through.");
  } else if (effectiveHours < 8) {
    notes.push("This is better, but it still sits below the strongest weeks from the tracker.");
  } else if (effectiveHours < 9) {
    notes.push("This matches the steadier range where my tracker started to show stronger focus and sleep scores.");
  } else {
    notes.push("This is close to the strongest results in the tracker and sits inside the recommended teen range.");
  }

  if (refs.sleepImpactScreen.checked) {
    notes.push("Late screen use tends to pull concentration and sleep quality down slightly.");
  }

  if (refs.sleepImpactCaffeine.checked) {
    notes.push("Late caffeine also lined up with shorter sleep in the tracker.");
  }

  refs.sleepImpactSummary.textContent = notes.join(" ");
}

function setupSleepImpactTool() {
  if (!refs.sleepImpactRange) {
    return;
  }

  const update = () => updateSleepImpactTool();

  refs.sleepImpactRange.addEventListener("input", update);
  refs.sleepImpactScreen.addEventListener("change", update);
  refs.sleepImpactCaffeine.addEventListener("change", update);
  update();
}

function renderSleepChart() {
  const width = 860;
  const height = 320;
  const margin = { top: 24, right: 20, bottom: 46, left: 42 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const minY = 6;
  const maxY = 10;
  const barStep = innerWidth / sleepDataset.length;
  const barWidth = Math.max(10, barStep * 0.56);
  const xForIndex = (index) => margin.left + index * barStep + barStep / 2;
  const yForValue = (value) =>
    margin.top + ((maxY - value) / (maxY - minY)) * innerHeight;
  const plotBottom = margin.top + innerHeight;
  const targetBandY = yForValue(10);
  const targetBandHeight = yForValue(8) - yForValue(10);
  const yTicks = [6, 7, 8, 9, 10];

  const gridLines = yTicks
    .map((tick) => {
      const y = yForValue(tick);

      return `
        <line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" stroke="rgba(40, 71, 161, 0.12)" stroke-width="1" />
        <text x="${margin.left - 10}" y="${y + 4}" text-anchor="end" font-size="12" fill="#5d6778">${tick}h</text>
      `;
    })
    .join("");

  const bars = sleepDataset
    .map((entry, index) => {
      const x = xForIndex(index) - barWidth / 2;
      const y = yForValue(entry.totalSleep);
      const heightValue = plotBottom - y;

      return `
        <g>
          <title>${shortDate(entry.date)}: ${entry.totalSleep.toFixed(2)} hours</title>
          <rect
            x="${x}"
            y="${y}"
            width="${barWidth}"
            height="${heightValue}"
            rx="8"
            fill="rgba(64, 112, 230, 0.88)"
          />
        </g>
      `;
    })
    .join("");

  const trendLine = sleepDataset
    .map((entry, index) => `${xForIndex(index)},${yForValue(entry.totalSleep)}`)
    .join(" ");

  const dots = sleepDataset
    .map(
      (entry, index) => `
        <circle cx="${xForIndex(index)}" cy="${yForValue(entry.totalSleep)}" r="2.8" fill="#f27e53" />
      `
    )
    .join("");

  const xLabels = sleepDataset
    .map((entry, index) => {
      const shouldLabel =
        index === 0 || index === 7 || index === 14 || index === 21 || index === sleepDataset.length - 1;

      if (!shouldLabel) {
        return "";
      }

      return `
        <text
          x="${xForIndex(index)}"
          y="${height - 14}"
          text-anchor="middle"
          font-size="12"
          fill="#5d6778"
        >
          ${shortDate(entry.date)}
        </text>
      `;
    })
    .join("");

  refs.sleepChart.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Daily sleep hours across 28 days with the recommended 8 to 10 hour range highlighted.">
      <rect x="${margin.left}" y="${targetBandY}" width="${innerWidth}" height="${targetBandHeight}" rx="16" fill="rgba(240, 196, 107, 0.28)" />
      <text x="${width - margin.right}" y="${targetBandY + 16}" text-anchor="end" font-size="12" fill="#8e6115">Recommended 8-10 hours</text>
      ${gridLines}
      ${bars}
      <polyline points="${trendLine}" fill="none" stroke="#f27e53" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      ${dots}
      ${xLabels}
    </svg>
    <div class="chart-caption">
      <span class="chart-caption__band">Teen target range</span>
      <span class="chart-caption__bars">Daily sleep hours</span>
      <span class="chart-caption__line">Overall trend line</span>
    </div>
  `;
}

function renderProcessSection() {
  refs.timeline.innerHTML = createMarkupList(
    siteContent.timeline,
    (step, index) => `
      <article class="timeline__item reveal">
        <span class="timeline__index">${index + 1}</span>
        <h3>${step.title}</h3>
        <p>${step.text}</p>
      </article>
    `
  );

  refs.skillsGrid.innerHTML = createMarkupList(
    siteContent.skills,
    (skill) => `
      <article class="skill-card reveal" data-reveal="right">
        <span class="skill-card__type">${skill.type}</span>
        <h3>${skill.title}</h3>
        <p>${skill.text}</p>
      </article>
    `
  );
}

function renderReflectionSection() {
  refs.reflectionGrid.innerHTML = createMarkupList(
    siteContent.reflections,
    (item) => `
      <article class="reflection-card reveal">
        <span class="card-kicker">${item.kicker}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `
  );

  refs.criteriaGrid.innerHTML = createMarkupList(siteContent.criteria, (item) => {
    const statusClass =
      item.status === "Complete" || item.status === "Fully met"
        ? "status-pill status-pill--met"
        : "status-pill status-pill--partial";

    return `
      <article class="criteria-card reveal">
        <div class="criteria-card__meta">
          <span class="card-kicker">${item.title}</span>
          <span class="${statusClass}">${item.status}</span>
        </div>
        <h3>${item.title} evaluation</h3>
        <p>${item.detail}</p>
      </article>
    `;
  });
}

function renderSources() {
  refs.sourcesList.innerHTML = createMarkupList(
    siteContent.sources,
    (source) => `
      <article class="source-card reveal">
        <h3>${source.title}</h3>
        <p>${source.text}</p>
        <p><a href="${source.link}" target="_blank" rel="noreferrer">Open source</a></p>
      </article>
    `
  );
}

function renderTipFilters() {
  refs.tipFilters.innerHTML = createMarkupList(
    siteContent.tipFilters,
    (filter) => `
      <button
        class="filter-chip ${filter === activeTipFilter ? "is-active" : ""}"
        type="button"
        data-filter="${filter}"
      >
        ${filter}
      </button>
    `
  );
}

function renderTips() {
  const visibleTips =
    activeTipFilter === "All"
      ? siteContent.tips
      : siteContent.tips.filter((tip) => tip.category === activeTipFilter);

  refs.tipsGrid.innerHTML = createMarkupList(
    visibleTips,
    (tip) => `
      <article class="tip-card reveal" data-reveal="scale">
        <div class="tip-card__meta">
          <span class="tip-tag">${tip.category}</span>
        </div>
        <h3>${tip.title}</h3>
        <p>${tip.text}</p>
        <div class="tip-card__why">
          <strong>Why it helps</strong>
          <p>${tip.why}</p>
        </div>
      </article>
    `
  );

  observeReveals();
}

function renderProgress() {
  const percentage = Math.min((progress.collectedWeeks / progress.goalWeeks) * 100, 100);
  refs.progressFill.style.width = `${percentage}%`;
  refs.progressCopy.textContent = `${progress.collectedWeeks} of ${progress.goalWeeks} weeks collected`;
}

function observeReveals() {
  const revealItems = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => {
    if (!item.classList.contains("is-visible")) {
      observer.observe(item);
    }
  });
}

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progressValue = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

  refs.scrollProgress.style.width = `${progressValue}%`;
}

function setupTipFilters() {
  refs.tipFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) {
      return;
    }

    activeTipFilter = button.dataset.filter;
    renderTipFilters();
    renderTips();
  });
}

function setupMobileNav() {
  if (!refs.navToggle) {
    return;
  }

  refs.navToggle.addEventListener("click", () => {
    const isOpen = refs.nav.classList.toggle("is-open");
    refs.navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  refs.nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      refs.nav.classList.remove("is-open");
      refs.navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

function setupActiveNav() {
  const sections = siteContent.navigation
    .map((item) => document.querySelector(item.href))
    .filter(Boolean);
  const links = Array.from(refs.nav.querySelectorAll("a"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        links.forEach((link) => {
          link.classList.toggle(
            "is-active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      });
    },
    {
      rootMargin: "-40% 0px -45% 0px",
      threshold: 0.1
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function init() {
  renderNavigation();
  renderHero();
  renderCoreCards();
  renderTrackerSection();
  setupSleepImpactTool();
  renderProcessSection();
  renderReflectionSection();
  renderSources();
  renderTipFilters();
  renderTips();
  renderProgress();
  setupTipFilters();
  setupMobileNav();
  setupActiveNav();
  observeReveals();
  updateScrollProgress();

  window.addEventListener("scroll", updateScrollProgress, { passive: true });
}

init();
