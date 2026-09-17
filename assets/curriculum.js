// AI.Study curriculum manifest — single source of truth for module order/titles/files.
// When a new lesson file is added, set its `file` here (root-relative path) AND
// update the matching module link + "완료" tag in index.html.
window.AI_STUDY_MODULES = [
  { id: '1-1', title: 'AI, 머신러닝, 딥러닝, LLM은 뭐가 다른가', file: 'lessons/1-1-ai-ml-dl-llm.html' },
  { id: '1-2', title: 'LLM은 어떻게 "다음 단어"를 예측하는가', file: null },
  { id: '1-3', title: '학습(training)과 추론(inference)의 차이', file: null },
  { id: '1-4', title: '실무에서 자주 듣는 필수 용어 정리', file: null },
  { id: '2-1', title: 'Transformer와 어텐션, 직관적으로 이해하기', file: null },
  { id: '2-2', title: '컨텍스트 윈도우와 토큰 한계가 실무에 미치는 영향', file: null },
  { id: '2-3', title: '환각(Hallucination) 이해하고 대응하기', file: null },
  { id: '2-4', title: 'GPT vs Claude vs Gemini vs 오픈소스 모델 비교', file: null },
  { id: '2-5', title: 'RAG(검색증강생성) 개념', file: null },
  { id: '2-6', title: '멀티모달 AI (이미지·음성·영상)', file: null },
  { id: '2-7', title: 'AI 에이전트란 무엇인가', file: null },
  { id: '3-1', title: '좋은 프롬프트의 구조: 역할·맥락·지시·형식', file: null },
  { id: '3-2', title: 'Zero-shot vs Few-shot', file: null },
  { id: '3-3', title: '단계적으로 생각하게 만들기 (Chain-of-Thought)', file: null },
  { id: '3-4', title: '시스템 프롬프트와 페르소나 설계', file: null },
  { id: '3-5', title: '반복 개선(Iteration)으로 프롬프트 다듬기', file: null },
  { id: '3-6', title: '실전: 기획서·회의록·리서치에 바로 쓰는 프롬프트', file: null },
  { id: '4-1', title: 'AI로 요구사항정의서·기획서 초안 잡기', file: null },
  { id: '4-2', title: 'AI 기반 UX 리서치와 페르소나 생성', file: null },
  { id: '4-3', title: 'Figma AI 등으로 와이어프레임 빠르게 만들기', file: null },
  { id: '4-4', title: '회의록 자동 요약과 액션아이템 정리', file: null },
  { id: '4-5', title: '스프레드시트·데이터 분석에 AI 활용', file: null },
  { id: '4-6', title: '업무에 AI 쓸 때 보안·저작권 체크리스트', file: null },
  { id: '5-1', title: 'AI 기능을 제품에 녹이는 UX 패턴', file: null },
  { id: '5-2', title: 'AI 기능 기획서: 정상케이스와 실패케이스 정의', file: null },
  { id: '5-3', title: 'AI 기능의 성공지표 정의와 측정', file: null },
  { id: '5-4', title: '경쟁 서비스 AI 기능 벤치마킹', file: null },
  { id: '5-5', title: '스마트홈·IoT와 AI 결합 사례 연구', file: null },
  { id: '6-1', title: 'API란 무엇이고 AI API는 어떻게 호출되는가', file: null },
  { id: '6-2', title: '노코드/로코드로 AI 자동화 직접 만들어보기', file: null },
  { id: '6-3', title: '벡터DB와 임베딩, 실습으로 감 잡기', file: null },
  { id: '6-4', title: '파인튜닝이란 무엇이고 언제 필요한가', file: null },
  { id: '7-1', title: '최신 트렌드: 에이전틱 AI, 온디바이스 AI', file: null },
  { id: '7-2', title: 'AI 윤리와 편향 문제', file: null },
  { id: '7-3', title: '저작권과 법적 이슈', file: null },
  { id: '7-4', title: '프라이버시와 보안 리스크', file: null },
  { id: '7-5', title: '조직에 AI 도입할 때의 변화관리', file: null },
  { id: '8-1', title: '나만의 미니 프로젝트 기획해보기', file: null },
  { id: '8-2', title: '꾸준히 학습을 이어가는 방법', file: null }
];

(function () {
  function renderSide(kind, mod) {
    var label = kind === 'prev' ? '← 이전' : '다음 →';
    if (!mod) {
      return '<span class="pager-btn ' + kind + ' disabled"><span class="pager-label">' + label + '</span><span class="pager-title">없음</span></span>';
    }
    if (!mod.file) {
      return '<span class="pager-btn ' + kind + ' disabled"><span class="pager-label">' + label + '</span><span class="pager-title">' + mod.id + ' · 준비중</span></span>';
    }
    var root = document.body.getAttribute('data-root') || '';
    return '<a class="pager-btn ' + kind + '" href="' + root + mod.file + '"><span class="pager-label">' + label + '</span><span class="pager-title">' + mod.id + ' · ' + mod.title + '</span></a>';
  }

  function injectStyles() {
    if (document.getElementById('pager-styles')) return;
    var css =
      '.pager{display:flex;justify-content:space-between;align-items:stretch;gap:12px;margin-top:56px;padding-top:24px;border-top:1px solid var(--line);flex-wrap:wrap;}' +
      '.pager-btn{display:flex;flex-direction:column;gap:4px;text-decoration:none;padding:12px 16px;border:1px solid var(--line);border-radius:10px;background:var(--surface);min-width:0;flex:1 1 160px;max-width:280px;transition:border-color .15s,background .15s;}' +
      '.pager-btn.next{align-items:flex-end;text-align:right;}' +
      '.pager-btn:not(.disabled):hover{border-color:var(--accent);background:var(--accent-soft);}' +
      '.pager-btn.disabled{opacity:.45;cursor:default;}' +
      '.pager-label{font-family:var(--font-mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-faint);}' +
      '.pager-title{font-size:13.5px;color:var(--ink);font-weight:600;line-height:1.4;}' +
      '.pager-home{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;text-decoration:none;padding:10px 22px;border-radius:10px;background:var(--accent-soft);color:var(--accent-strong);font-weight:600;font-size:13px;white-space:nowrap;transition:background .15s,color .15s;order:0;}' +
      '.pager-home:hover{background:var(--accent);color:var(--accent-contrast);}' +
      '.pager-home-icon{font-size:16px;line-height:1;}' +
      '@media (max-width:560px){.pager{gap:8px;}.pager-btn{max-width:none;}.pager-btn .pager-title{font-size:12.5px;}.pager-btn{padding:10px 12px;}}';
    var style = document.createElement('style');
    style.id = 'pager-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function initPager() {
    var container = document.getElementById('pager');
    if (!container) return;
    var modules = window.AI_STUDY_MODULES;
    var currentId = document.body.getAttribute('data-module-id');
    var root = document.body.getAttribute('data-root') || '';
    var idx = modules.findIndex(function (m) { return m.id === currentId; });
    if (idx === -1) return;

    injectStyles();

    var prev = idx > 0 ? modules[idx - 1] : null;
    var next = idx < modules.length - 1 ? modules[idx + 1] : null;

    container.className = 'pager';
    container.innerHTML =
      renderSide('prev', prev) +
      '<a class="pager-home" href="' + root + 'index.html"><span class="pager-home-icon">⌂</span><span>홈</span></a>' +
      renderSide('next', next);
  }

  document.addEventListener('DOMContentLoaded', initPager);
})();
