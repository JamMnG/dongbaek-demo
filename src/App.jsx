import React, { useState } from 'react';

export default function App() {
  const [demoTab, setDemoTab] = useState('exhausted'); // 'active' | 'exhausted'

  return (
    <div className="min-h-screen bg-[#F8F8F5] text-slate-800 font-sans antialiased selection:bg-[#C8F560] selection:text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#0A291A] text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#164229] border border-[#235839] text-[#C8F560] text-xs sm:text-sm font-semibold tracking-wide">
              <span>DIVE 2026</span>
              <span className="w-1 h-1 bg-[#C8F560] rounded-full"></span>
              <span>BNK금융지주 트랙</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              캐시백은 끝나도,<br />
              <span className="text-[#C8F560]">단골은 남게.</span>
            </h1>
            
            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl font-normal leading-relaxed">
              동백전 결제 이력을 <strong className="text-white font-semibold">부산 단골 통장</strong>으로 바꾸고, 데이터로 다음 골목을 발견하는 지역화폐 활성화 서비스
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a href="#demo" className="px-6 py-3.5 bg-[#C8F560] hover:bg-[#b8e84c] text-[#0A291A] font-bold rounded-xl transition-all shadow-lg flex items-center gap-2 group">
                3분 만에 이해하기
                <span className="text-base leading-none group-hover:translate-y-0.5 transition-transform">↓</span>
              </a>
              <a href="#preview" className="px-6 py-3.5 bg-[#164229] hover:bg-[#1f5636] text-white font-semibold rounded-xl border border-[#28603d] transition-all flex items-center gap-2">
                인터랙티브 데모 보기
                <span className="text-base leading-none">→</span>
              </a>
            </div>

            {/* Step Progress Bar */}
            <div className="pt-8 border-t border-[#1a4a2f] grid grid-cols-3 gap-2 sm:gap-4 max-w-lg">
              <div className="space-y-1">
                <div className="text-xs text-slate-400 font-medium">01 캐시백</div>
                <div className="h-1.5 bg-[#1a4a2f] rounded-full"></div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-slate-400 font-medium">02 결제 이력</div>
                <div className="h-1.5 bg-[#1a4a2f] rounded-full"></div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-[#C8F560] font-semibold">03 단골 관계</div>
                <div className="h-1.5 bg-[#C8F560] rounded-full shadow-[0_0_8px_#C8F560]"></div>
              </div>
            </div>
          </div>

          {/* Right Stat Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#123824] border border-[#215236] rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <div className="text-slate-300 text-sm font-medium mb-2">지금, 캐시백이 끝나면</div>
              <div className="text-6xl sm:text-7xl font-black text-[#FF6B6B] tracking-tight mb-4">
                48.5<span className="text-4xl">%</span>
              </div>
              <p className="text-white font-bold text-lg mb-6 leading-snug">
                다른 결제수단으로 이동
              </p>
              <div className="pt-4 border-t border-[#1d4f32] flex justify-between items-center text-xs sm:text-sm text-slate-300">
                <span>대체수단 1위</span>
                <span className="text-[#FF6B6B] font-bold bg-[#281315] px-2.5 py-1 rounded-md border border-[#4a2023]">
                  신용카드 54.0%
                </span>
              </div>
              <div className="mt-4 text-[11px] text-slate-400 text-right">
                출처: BDI 2025 실문 2,000명, p.62
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SOLUTION SECTION */}
      <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-[#123824] uppercase bg-[#E2F7A5] px-3 py-1 rounded-full">THE SOLUTION</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4 leading-tight">
            한 번의 결제를 다음 방문으로 이어주는 구조
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            새 예산을 더 쓰는 대신, 이미 만들어진 결제 이력과 QR 수수료 절감 여력을 연결합니다.
          </p>
        </div>

        {/* Diagram Loop */}
        <div className="relative bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            
            <div className="bg-[#F8F8F5] p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#E2F7A5] text-[#0A291A] font-bold flex items-center justify-center text-sm">01</div>
              <h3 className="font-bold text-slate-900 text-lg">결제</h3>
              <p className="text-slate-600 text-sm">동백전으로 참여 가맹점 이용</p>
            </div>

            <div className="bg-[#F8F8F5] p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#E2F7A5] text-[#0A291A] font-bold flex items-center justify-center text-sm">02</div>
              <h3 className="font-bold text-slate-900 text-lg">축적</h3>
              <p className="text-slate-600 text-sm">가게별 단골 진행도 갱신</p>
            </div>

            <div className="bg-[#F8F8F5] p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#E2F7A5] text-[#0A291A] font-bold flex items-center justify-center text-sm">03</div>
              <h3 className="font-bold text-slate-900 text-lg">발견</h3>
              <p className="text-slate-600 text-sm">기회가 큰 다음 골목 추천</p>
            </div>

            <div className="bg-[#F8F8F5] p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#E2F7A5] text-[#0A291A] font-bold flex items-center justify-center text-sm">04</div>
              <h3 className="font-bold text-slate-900 text-lg">재방문</h3>
              <p className="text-slate-600 text-sm">캐시백 이후에도 관계 유지</p>
            </div>

          </div>

          {/* Center Banner */}
          <div className="mt-8 pt-8 border-t border-slate-100 bg-[#0A291A] text-white rounded-2xl p-6 text-center">
            <h4 className="text-lg font-bold text-[#C8F560] mb-1">부산 전체 단골 통장</h4>
            <p className="text-slate-300 text-sm">가게가 바뀌어도 관계는 한곳에 쌓여 선순환을 만듭니다</p>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT PREVIEW SECTION */}
      <section id="preview" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A291A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-[#C8F560] uppercase">PRODUCT PREVIEW</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-4">
              사용자가 보는 건 분석이 아니라, 다음 행동
            </h2>
            <p className="text-slate-300 text-base">
              아래 토글과 카드를 눌러 핵심 경험을 직접 확인해보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Interactive Mobile Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[360px] bg-slate-900 border-[8px] border-slate-800 rounded-[40px] shadow-2xl overflow-hidden text-slate-900">
                {/* Status Bar */}
                <div className="bg-slate-100 px-6 pt-3 pb-2 flex justify-between items-center text-xs text-slate-500 font-semibold">
                  <span>9:41</span>
                  <div className="flex gap-1.5 items-center">
                    <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                  </div>
                </div>

                {/* App Content */}
                <div className="bg-slate-100 p-4 space-y-4 min-h-[500px]">
                  
                  {/* Header & Toggle */}
                  <div className="space-y-3">
                    <div className="text-xs text-slate-500 font-medium">안녕하세요, 수현님</div>
                    <div className="font-bold text-lg leading-tight text-slate-900">
                      {demoTab === 'active' ? '이번 달 캐시백이 적용 중이에요' : '캐시백 이후에도 단골은 계속돼요'}
                    </div>

                    {/* Toggle Control */}
                    <div className="grid grid-cols-2 bg-slate-200 p-1 rounded-xl text-xs font-bold">
                      <button 
                        onClick={() => setDemoTab('active')}
                        className={`py-2 rounded-lg transition-all ${demoTab === 'active' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
                      >
                        적용 중
                      </button>
                      <button 
                        onClick={() => setDemoTab('exhausted')}
                        className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1 ${demoTab === 'exhausted' ? 'bg-[#0A291A] text-white shadow-sm' : 'text-slate-500'}`}
                      >
                        소진 후
                        <span className="text-[9px] bg-[#FF6B6B] text-white px-1 rounded">DEMO</span>
                      </button>
                    </div>
                  </div>

                  {/* Banner Card */}
                  <div className={`p-4 rounded-2xl transition-all ${demoTab === 'active' ? 'bg-[#E2F7A5] text-[#0A291A]' : 'bg-[#C8F560] text-[#0A291A]'}`}>
                    <div className="text-xs font-bold opacity-80">
                      {demoTab === 'active' ? '캐시백 한도 잔여 15,000원' : '캐시백 0원이어도 단골 혜택 유지!'}
                    </div>
                    <div className="font-black text-base mt-1">
                      {demoTab === 'active' ? '단골 가게 이용 시 추가 혜택' : '지금 3곳에서 단골 관계가 자라고 있어요'}
                    </div>
                  </div>

                  {/* Regular Merchant List */}
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                      <span>내 단골 통장</span>
                      <span className="text-slate-400 font-normal">전체보기 →</span>
                    </div>

                    <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200/60 space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="font-bold">모모 베이커리</span>
                        <span className="text-[#0A291A] font-extrabold text-[11px] bg-[#E2F7A5] px-1.5 py-0.5 rounded">1번 더 방문</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#0A291A] h-full w-[80%]"></div>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200/60 space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="font-bold">온누리 약국</span>
                        <span className="text-[#0A291A] font-extrabold text-[11px] bg-[#E2F7A5] px-1.5 py-0.5 rounded">2번 더 방문</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#0A291A] h-full w-[50%]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Recommendation Button */}
                  <div className="pt-2">
                    <button className="w-full bg-[#FF6B6B] hover:bg-[#f85959] text-white py-3.5 px-4 rounded-2xl font-bold text-xs text-left shadow-lg flex justify-between items-center transition-all">
                      <div>
                        <div className="text-[10px] text-white/80 font-normal">데이터가 찾은 다음 골목</div>
                        <div>연산동 단골 우대 골목 매장 3곳 보기</div>
                      </div>
                      <span className="text-lg leading-none shrink-0">→</span>
                    </button>
                    <div className="text-[10px] text-slate-400 text-center mt-2">
                      예시 사용자 · 데모 혜택 · 실제 결제 없음
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Explanations */}
            <div className="lg:col-span-6 space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#C8F560] text-[#0A291A] font-bold flex items-center justify-center shrink-0 mt-1">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-1">상태에 맞는 이유 제시</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    캐시백 적용 전에는 첫 방문을, 소진 후에는 쌓인 단골 관계와 혜택을 강조하여 지속적인 앱 이용 명분을 제공합니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#C8F560] text-[#0A291A] font-bold flex items-center justify-center shrink-0 mt-1">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-1">다음 행동은 한 문장으로</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    "한 번 더 방문하면 음료 혜택"처럼 사용자가 복잡한 계산 없이 바로 이해하고 움직일 수 있도록 행동을 직관적으로 가이드합니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#C8F560] text-[#0A291A] font-bold flex items-center justify-center shrink-0 mt-1">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-1">정직하고 과장 없는 데모</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    확인되지 않은 QR 정보나 혜택 정보는 모의(DEMO) 라벨을 정확히 표기하여 심사위원에게 데이터 정직성을 증명합니다.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. DATA ENGINE SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-[#123824] uppercase bg-[#E2F7A5] px-3 py-1 rounded-full">DATA ENGINE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
            데이터는 장식이 아니라 추천을 움직이는 엔진
          </h2>
          <p className="text-slate-600 text-base">
            인기 매장이 아니라, 소비수요는 충분하지만 동백전 이용이 낮은 곳을 찾아 실제 가맹점 방문으로 연결합니다.
          </p>
        </div>

        {/* Pipeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-12">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="text-xs font-bold text-slate-400 mb-1">내부 데이터</div>
            <div className="font-bold text-slate-900 text-base mb-2">동백전 90일 거래</div>
            <div className="text-xs text-slate-500">누가 · 어디서 · 얼마나 자주</div>
            <div className="mt-3 text-[11px] bg-slate-100 text-slate-600 px-2 py-1 rounded">TRNS + CUST + MCNT</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="text-xs font-bold text-slate-400 mb-1">부산 공공데이터</div>
            <div className="font-bold text-slate-900 text-base mb-2">소비매출 · 생활인구</div>
            <div className="text-xs text-slate-500">수요는 있는데 놓친 곳은 어디</div>
            <div className="mt-3 text-[11px] bg-slate-100 text-slate-600 px-2 py-1 rounded">행정동 × 업종 × 시간대</div>
          </div>

          <div className="bg-[#0A291A] text-white p-6 rounded-2xl shadow-lg text-center relative overflow-hidden">
            <div className="text-xs font-semibold text-[#C8F560] mb-1">연산동 × 생활서비스</div>
            <div className="text-3xl font-black text-[#C8F560] my-1">72점</div>
            <div className="text-xs text-slate-300 font-medium">전환 기회점수</div>
            <div className="mt-3 text-[10px] bg-[#164229] text-slate-300 px-2 py-1 rounded">높은 수요 × 낮은 동백전 이용</div>
          </div>

          <div className="bg-[#C8F560] text-[#0A291A] p-6 rounded-2xl shadow-sm text-center font-bold">
            <div className="text-xs opacity-80 mb-1">추천 결과</div>
            <div className="text-lg font-black mb-1">아직 안 가본<br />실제 가맹점 3곳</div>
            <div className="text-xs opacity-90 font-medium mt-2">첫 방문 → 새 단골 관계</div>
          </div>

        </div>
      </section>

      {/* 5. FLYWHEEL SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-[#123824] uppercase bg-[#E2F7A5] px-3 py-1 rounded-full">TWO-SIDED FLYWHEEL</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
              소비자와 점주가 함께 동백전을 다시 돌게 만드는 힘
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="text-xs font-bold text-slate-400 mb-2">소비자</div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">혜택 가게를 찾음</h3>
              <p className="text-slate-600 text-xs">단골 진행도 · 새로운 골목 발견</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="text-xs font-bold text-slate-400 mb-2">가맹점</div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">QR 참여 유인</h3>
              <p className="text-slate-600 text-xs">0% 수수료 · 단골 데이터 · 우선 노출</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="text-xs font-bold text-slate-400 mb-2">혜택 여력</div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">절감분 범위 내 전환</h3>
              <p className="text-slate-600 text-xs">점주가 조건과 상한 선택</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="text-xs font-bold text-slate-400 mb-2">지역화폐</div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">캐시백 이후에도 락인</h3>
              <p className="text-slate-600 text-xs">방문 · 재방문 · 다양성 지속 측정</p>
            </div>
          </div>

          <div className="mt-8 bg-[#0A291A] text-center text-white py-6 px-4 rounded-2xl">
            <span className="text-[#C8F560] font-black text-xl">신규 예산 0원 지향</span>
            <span className="text-slate-300 text-sm ml-3">— 기존 결제 수수료 절감액과 자산을 재연결합니다.</span>
          </div>
        </div>
      </section>

      {/* 6. WHY IT WINS SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-extrabold tracking-widest text-[#123824] uppercase bg-[#E2F7A5] px-3 py-1 rounded-full">WHY IT WINS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              평가기준과 기능이 바로 연결됩니다
            </h2>
            <p className="text-slate-600 text-base">
              가설 → 지표 → 기능 → 검증의 한 줄 논리로 데이터 기반 문제해결 30점을 정면으로 겨냥합니다.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#0A291A] bg-[#E2F7A5] px-2 py-0.5 rounded mr-2">01</span>
                <span className="font-bold text-slate-900">문제정의</span>
                <p className="text-xs text-slate-500 mt-1">한도 소진 뒤 결제수단 이탈(48.5%)을 정확히 겨냥</p>
              </div>
              <span className="w-5 h-5 text-slate-400 flex items-center justify-center">→</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#0A291A] bg-[#E2F7A5] px-2 py-0.5 rounded mr-2">02</span>
                <span className="font-bold text-slate-900">데이터 30점</span>
                <p className="text-xs text-slate-500 mt-1">거래 · 소비 · 생활인구를 추천 기능과 1:1 결합</p>
              </div>
              <span className="w-5 h-5 text-slate-400 flex items-center justify-center">→</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#0A291A] bg-[#E2F7A5] px-2 py-0.5 rounded mr-2">03</span>
                <span className="font-bold text-slate-900">차별성</span>
                <p className="text-xs text-slate-500 mt-1">가게별 스탬프가 아닌 도시 단위 통합 단골 통장</p>
              </div>
              <span className="w-5 h-5 text-slate-400 flex items-center justify-center">→</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#0A291A] bg-[#E2F7A5] px-2 py-0.5 rounded mr-2">04</span>
                <span className="font-bold text-slate-900">구현 정직성</span>
                <p className="text-xs text-slate-500 mt-1">데이터 확인 여부에 따라 안전 모드로 자동 전환</p>
              </div>
              <span className="w-5 h-5 text-slate-400 flex items-center justify-center">→</span>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A291A] text-slate-400 py-12 border-t border-[#184a2f] text-center text-xs">
        <p className="font-medium text-slate-300 mb-2">DIVE 2026 BNK금융지주 트랙 — 동백단골 팀</p>
        <p>본 서비스 데모는 공공데이터 및 가공된 모의 데이터를 기반으로 동작합니다.</p>
      </footer>

    </div>
  );
}
