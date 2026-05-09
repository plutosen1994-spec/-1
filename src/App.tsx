import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Circle, Terminal, Layout, Activity, ShieldCheck, Users } from 'lucide-react';

interface Slide {
  id: string;
  title?: string;
  content: React.ReactNode;
  isTransition?: boolean;
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 'TRANS-1',
      title: '一、品牌诊断',
      isTransition: true,
      content: (
        <div className="h-full flex items-center justify-center">
          <div className="text-6xl font-black text-slate-900 border-b-4 border-slate-900 pb-4 tracking-tighter">
            一、品牌诊断
          </div>
        </div>
      ),
    },
    {
      id: 'P1',
      title: '建发做了40年，市场真正记住了什么？',
      content: (
        <div className="space-y-10 flex flex-col justify-center h-full">
          <div className="p-8 bg-slate-50 border-l-4 border-slate-900 rounded-r-2xl">
            <p className="text-2xl text-slate-700 leading-relaxed font-medium">
              质量好、颜值高、新中式……这些标签帮助建发建立了产品认知，也形成了长期口碑
            </p>
          </div>
          <p className="text-3xl font-light text-slate-400 italic leading-relaxed">
            但这些更多是<span className="text-slate-900 font-bold mx-2">“产品标签”</span>，就没有真正升级<span className="text-slate-900 font-bold mx-2">“品牌认知”</span>
          </p>
        </div>
      ),
    },
    {
      id: 'P2',
      title: '核心矛盾：建发迈入3.0 阶段，外界标签仍是“开发商”',
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-2">
            {[ 
              { step: '1.0 质量为王', desc: '工程品质过硬，客户认可，口碑立住' },
              { step: '2.0 颜值突围', desc: '新中式产品力，建发成为东方美学住宅的代表' },
              { step: '3.0 综合发展', desc: '作为城市综合运营商，服务客户全生命周期' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-blue-600 font-black text-lg w-40">{item.step}</span>
                <span className="text-slate-600 font-medium">{item.desc}</span>
              </div>
            ))}
          </div>
          <div className="p-8 bg-red-50 border border-red-100 rounded-2xl">
            <p className="text-2xl text-red-600 font-black mb-4">
              战略已经升级，但市场认知还没有同步，很多人仍以为建发只是一家房产开发商
            </p>
            <p className="text-lg text-slate-500 font-bold">究其原因在于三大痛点——</p>
          </div>
        </div>
      ),
    },
    {
      id: 'P3',
      title: '痛点一：第二曲线正在成长，但没有被真正看见',
      content: (
        <div className="space-y-8">
          <div className="flex gap-8 p-8 bg-slate-50 rounded-2xl border border-slate-100 items-start">
            <div className="bg-slate-900 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold flex-shrink-0 text-xl">01</div>
            <p className="text-xl text-slate-700 leading-relaxed font-medium">
              信用评级机构在评价建发竞争优势时，核心表述仍落在<span className="font-bold text-slate-900">“产品体系健全、新中式品牌认知度高”</span>。
            </p>
          </div>
          <div className="flex gap-8 p-8 bg-slate-50 rounded-2xl border border-slate-100 items-start">
            <div className="bg-slate-900 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold flex-shrink-0 text-xl">02</div>
            <p className="text-xl text-slate-700 leading-relaxed font-medium">
              存量客户对建发的认知停留在购房和交付，后续触点没有串联成线，形成完整品牌体验。
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'P4',
      title: '痛点二：六大业务各自发力，但缺少“一个建发”',
      content: (
        <div className="space-y-4">
          <div className="text-red-600 font-black text-2xl text-center py-4 bg-red-50 border-2 border-red-100 rounded-2xl">
            共性问题高度一致——有内容无渠道、有能力无统筹、有意愿无机制
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border rounded-xl bg-slate-50">
              <span className="font-black text-slate-900 text-lg block mb-1">物业：</span>
              <span className="text-sm text-slate-600 font-medium leading-relaxed">体系相对成熟，但发声分散，缺集团统一规范</span>
            </div>
            <div className="p-4 border rounded-xl bg-slate-50">
              <span className="font-black text-slate-900 text-lg block mb-1">商管：</span>
              <span className="text-sm text-slate-600 font-medium leading-relaxed">品牌体系最完整，但需要时间沉淀</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 border rounded-lg bg-white shadow-sm flex gap-3">
              <span className="font-bold text-slate-900 shrink-0">城市更新：</span>
              <span className="text-slate-500">深耕20年500万方，成果没有转化成品牌资产</span>
            </div>
            <div className="p-3 border rounded-lg bg-white shadow-sm flex gap-3">
              <span className="font-bold text-slate-900 shrink-0">合诚：</span>
              <span className="text-slate-500">有意识无团队，内容停留在项目报道，缺高维叙事</span>
            </div>
            <div className="p-3 border rounded-lg bg-white shadow-sm flex gap-3">
              <span className="font-bold text-slate-900 shrink-0">养老：</span>
              <span className="text-slate-500">运营全省第一，无法使用集团背书，能力强声量弱</span>
            </div>
            <div className="p-3 border rounded-lg bg-white shadow-sm flex gap-3">
              <span className="font-bold text-slate-900 shrink-0">元晟恒：</span>
              <span className="text-slate-500">处于起步阶段，需要集团赋能</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'P5',
      title: '痛点三：客户生活在建发生态里，却感受不到统一品牌',
      content: (
        <div className="space-y-12 h-full flex flex-col justify-center text-center">
          <p className="text-2xl text-slate-600 font-medium leading-relaxed max-w-4xl mx-auto">
            客户买房、居住、逛商业都在建发生态内，但每个环节感知割裂，像在面对不同的公司，不同的品牌
          </p>
          <div className="max-w-2xl mx-auto h-0.5 bg-slate-100 flex items-center justify-center">
            <span className="bg-white px-4 text-slate-400 font-black tracking-widest text-xs">GAP</span>
          </div>
          <p className="text-5xl font-black text-slate-900 tracking-tighter">
            庞大的服务能力未能翻译成统一的品牌体验
          </p>
        </div>
      ),
    },
    {
      id: 'TRANS-2',
      title: '二、品牌建设总体思路',
      isTransition: true,
      content: (
        <div className="h-full flex items-center justify-center">
          <div className="text-6xl font-black text-slate-900 border-b-4 border-slate-900 pb-4 tracking-tighter">
            二、品牌建设总体思路
          </div>
        </div>
      ),
    },
    {
      id: 'P6-P7',
      title: '头部房企对标：让品牌跟着战略升级',
      content: (
        <div className="space-y-6">
          <p className="text-2xl text-red-600 font-black border-l-4 border-red-600 pl-4 mb-4">
             地产竞争，正在从“产品竞争”转向“生活方式与运营能力竞争”
          </p>
          <div className="grid grid-cols-3 gap-4 auto-rows-fr">
            <div className="p-6 bg-slate-900 text-white rounded-3xl flex flex-col">
              <h4 className="text-xl font-black mb-4 border-b border-white/10 pb-2">华润置地</h4>
              <div className="text-[11px] text-slate-400 space-y-2 flex-1">
                <p>• 战略升级为"世界一流城市投资开发运营商"</p>
                <p>• 2023 发布"为更好的城市"长期主张</p>
                <p>• 品牌叙事从企业视角转向城市开发运营视角</p>
              </div>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl flex flex-col">
              <h4 className="text-xl font-black mb-4 border-b border-slate-200 pb-2 text-slate-900">保利发展</h4>
              <div className="text-[11px] text-slate-500 space-y-2 flex-1">
                <p>• 推出"好生活营造公式"：真需求×强性能×长运营</p>
                <p>• 把企业能力翻译成客户的生活感受</p>
                <p>• 4月举办趋势大会发布新品牌主张</p>
              </div>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl flex flex-col">
              <h4 className="text-xl font-black mb-4 border-b border-slate-200 pb-2 text-slate-900">绿城中国</h4>
              <div className="text-[11px] text-slate-500 space-y-2 flex-1">
                <p>• 从纯开发商转向“重资产开发+轻资产代建”</p>
                <p>• 输出高级、简雅的“现代东方生活方式”</p>
                <p>• 从一次性卖房转向全周期资管溢价逻辑</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'P8',
      title: '品牌不是锦上添花，是战略能否落地的关键',
      content: (
        <div className="space-y-8">
          <p className="text-xl text-red-600 font-bold bg-red-50 p-4 rounded-xl border border-red-100">战略转型期，品牌必须同步跟上，产品叙事也必须升维到城市生活方式叙事。</p>
          <div className="grid grid-cols-3 gap-6">
            {[ 
              { t: '对外：认知管理工具', d: '转型初期认知未固化，现在是重新定义自己的最好的时机，错过了，旧标签自然固化，代价成倍。' },
              { t: '对内：协同管理工具', d: '六大业务各自为阵。统一品牌理念和口径，一线员工共同行为准则，降低跨部门协作成本。' },
              { t: '战略：资产积累工具', d: '新中式匠造基因、"钻石人生"资产。以其为根基向新的业务维度延伸，保留内核，扩展表达。' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 h-full">
                <h5 className="font-black text-lg mb-3 text-slate-900 underline underline-offset-4 decoration-blue-500/30">{item.t}</h5>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'P9',
      title: '因此，建发今年品牌建设聚焦三个方向——',
      content: (
        <div className="space-y-4 max-w-4xl mx-auto h-full flex flex-col justify-center">
          <div className="flex items-center gap-6 p-6 border-2 border-slate-900 rounded-3xl">
            <div className="bg-slate-900 text-white px-6 py-2 rounded-xl font-black text-xl w-32 text-center shrink-0">对外</div>
            <div>
              <p className="text-2xl font-black text-slate-900">抢占认知</p>
              <p className="text-sm text-slate-500 font-bold italic">趁“十五五”开局，定义“现在的建发是谁”。</p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-6 border-2 border-red-600 bg-red-50 rounded-3xl">
            <div className="bg-red-600 text-white px-6 py-2 rounded-xl font-black text-xl w-32 text-center shrink-0">对内</div>
            <div>
              <p className="text-2xl font-black text-red-600">降低内耗</p>
              <p className="text-sm text-red-400 font-bold italic">用同一套行动纲领和客户理念，打通六大业务，降低开发建设运营的交接成本。</p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-6 border-2 border-blue-600 bg-blue-50 rounded-3xl">
            <div className="bg-blue-600 text-white px-6 py-2 rounded-xl font-black text-xl w-32 text-center shrink-0">战略</div>
            <div>
              <p className="text-2xl font-black text-blue-600">资产增值</p>
              <p className="text-sm text-blue-400 font-bold italic">让品牌成为不仅是花钱的部门，更是赋能一线溢价的工具。</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'P11-PRE',
      title: '第一件事——品牌传播',
      content: (
        <div className="flex flex-col justify-center h-full items-center text-center space-y-12">
          <div className="space-y-6">
             <h3 className="text-5xl font-black text-slate-900 tracking-tight">用一句话，让所有人重新认识建发</h3>
             <p className="text-2xl text-slate-400 font-bold italic">以年度主张为线索，串联全年传播动作</p>
          </div>
          <div className="w-24 h-1.5 bg-slate-900"></div>
          <div className="text-slate-500 font-medium text-xl leading-relaxed max-w-4xl italic">
            不仅是“新中式”，更是高品质生活的全面守护者
          </div>
        </div>
      ),
    },
    {
      id: 'P11',
      title: '品牌主张【方向一】生活如此璀璨',
      content: (
        <div className="bg-slate-900 p-12 rounded-[3.5rem] h-full flex flex-col justify-center relative overflow-hidden group border-2 border-white/5">
          <div className="z-10">
            <h3 className="text-7xl font-black text-white tracking-tighter mb-4">生活如此璀璨</h3>
            <p className="text-lg font-bold text-white/60 mb-10 max-w-4xl tracking-wide">建发深耕房地产 40 多年，钻石品质，是刻在骨子里的基因</p>
            
            <div className="space-y-6 text-slate-400 font-medium leading-relaxed text-xl max-w-5xl">
              <p>· 建发也在变——十五五开局，一二曲线并行，建发如今不只是盖房子了</p>
              <p>· 时代在变——政府提倡：不仅要“住好房子”，也要“过好日子”</p>
              <p>· 承接钻石人生的品牌基因，从一套房的产品品质，延伸到客户全生命周期的生活品质</p>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white font-bold tracking-tight">
                  核心释义：从住得好到活得好，就是“生活如此璀璨”
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full"></div>
        </div>
      ),
    },
    {
      id: 'P12',
      title: '品牌主张【方向二】遇“建”更美生活',
      content: (
        <div className="bg-slate-900 p-12 rounded-[3.5rem] h-full flex flex-col justify-center relative overflow-hidden group border-2 border-white/5">
          <div className="z-10">
            <h3 className="text-7xl font-black text-white tracking-tighter mb-4">遇“建”更美生活</h3>
            <p className="text-lg font-bold text-white/60 mb-10 max-w-4xl tracking-wide">让每一次不期而遇，都成为建发与客户的温情连接</p>
            
            <div className="space-y-6 text-slate-400 font-medium leading-relaxed text-xl max-w-5xl">
              <p>· 从企业视角转向客户视角，打破距离感</p>
              <p>· “建”字双关，落脚于每一次不期而遇，串联六大业务散布在客户日常每一个触点</p>
              <p>· 物业的温度、商业的烟火、更新后老街的新旧交融……</p>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white font-bold tracking-tight">
                  核心释义：开发、建设、运营，只为让客户遇“建”更美生活
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[140px] rounded-full"></div>
        </div>
      ),
    },
    {
      id: 'P13',
      title: '品牌主张【方向三】让建筑点亮生活',
      content: (
        <div className="bg-slate-900 p-12 rounded-[3.5rem] h-full flex flex-col justify-center relative overflow-hidden group border-2 border-white/5">
          <div className="z-10">
            <h3 className="text-7xl font-black text-white tracking-tighter mb-4">让建筑点亮生活</h3>
            <p className="text-lg font-bold text-white/60 mb-10 max-w-4xl tracking-wide">不仅是城市的地标，更是点亮万千家庭美好生活的灯塔</p>
            
            <div className="space-y-8 text-slate-400 font-medium leading-relaxed text-xl max-w-5xl border-l-[1px] border-white/10 pl-8 ml-2">
              <div className="space-y-2">
                <p className="text-white font-bold italic">· “建筑”是基底：</p>
                <p>深耕四十余年的地产主业，是承载所有美好生活的物理空间</p>
              </div>
              <div className="space-y-2">
                <p className="text-white font-bold italic">· “点亮生活”是光芒：</p>
                <p>六大业务是灯塔发出的光，代表全生命周期服务，照亮更长远的生活</p>
              </div>
              
              <div className="mt-4 pt-8 border-t border-white/10">
                <p className="text-white font-bold tracking-tight">
                  核心释义：让建筑成为承载美好的容器，点亮城市万千灯火
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 blur-[140px] rounded-full"></div>
        </div>
      ),
    },
    {
      id: 'P14',
      title: '主张之下，全年怎么推广',
      content: (
        <div className="grid grid-cols-3 gap-8 py-10 h-full items-center">
          {[ 
            { q: 'Q2', t: '主张首发', d: '六大业务同步跟进，各自业务演绎诠释。' },
            { q: 'Q2-Q4', t: '灯塔战略深化', d: '战略内容专题持续深化。' },
            { q: 'Q4', t: '联动收官', d: '六大业务联动收官，落地客户真实生活场景。' }
          ].map((item, i) => (
            <div key={i} className="p-10 border rounded-[3rem] bg-slate-50 text-center flex flex-col justify-center h-full hover:bg-slate-900 hover:text-white transition-all duration-300 group">
               <div className="text-7xl font-black italic mb-6 opacity-5 group-hover:opacity-10">0{i+1}</div>
               <div className="text-4xl font-black mb-4 tracking-tighter">{item.q}</div>
               <h4 className="text-xl font-bold mb-4">{item.t}</h4>
               <p className="text-xs text-slate-500 leading-relaxed px-4 group-hover:text-slate-400">{item.d}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'P15',
      title: '第二件事：品牌管理体系完善',
      content: (
        <div className="grid grid-cols-5 gap-6 py-6 h-full items-center">
           <div className="col-span-3 flex flex-col items-center relative pr-24">
              <div className="mb-8 font-black text-3xl border-l-[12px] border-slate-900 pl-6 w-full">完善一套体系</div>
              
              <div className="flex flex-col items-center gap-2 w-full">
                 {[ 
                   { l: '品牌主张', v: '生活如此璀璨', s: '客户最终的感受', w: 'w-[50%]', bg: 'bg-slate-900 text-white' },
                   { l: '客户理念', v: '为客户多走一步', s: '我们的服务行为', w: 'w-[65%]', bg: 'bg-slate-700 text-white' },
                   { l: '行动纲领', v: '全域灯塔战略', s: '我们的行动目标', w: 'w-[78%]', bg: 'bg-slate-500 text-white' },
                   { l: '产品标签', v: '新中式匠造者', s: '我们的核心特色', w: 'w-[90%]', bg: 'bg-slate-300 text-slate-900' },
                   { l: '集团理念', v: '打造钻石人生', s: '我们对客户的承诺', w: 'w-[100%]', bg: 'bg-slate-100 text-slate-800' },
                 ].map((tier, i) => (
                   <div key={i} className="relative w-full flex items-center justify-center">
                      <div className={`${tier.w} ${tier.bg} p-6 rounded-2xl text-center flex flex-col justify-center items-center shadow-xl border border-white/5 relative z-10`}>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mb-1">{tier.l}</span>
                        <span className="text-xl font-black tracking-tight">{tier.v}</span>
                      </div>
                      
                      <div className="absolute left-[90%] top-1/2 -translate-y-1/2 flex items-center pointer-events-none w-64">
                         <div className="h-px bg-slate-300 w-8 shrink-0"></div>
                         <div className="pl-4 whitespace-nowrap">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block opacity-60">诠释:</span>
                            <span className="text-sm font-black text-slate-800">{tier.s}</span>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="col-span-2 space-y-6">
              <div className="p-8 border rounded-[2.5rem] bg-slate-100/50 space-y-4 shadow-sm">
                <h4 className="text-2xl font-black flex items-center gap-4 text-slate-900"><Terminal size={28}/> 编写一部手册</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">规范品牌、业务、产品架构关系。明确背书准则——各业务板块使用“建发”名片或背书时均有据可依。</p>
              </div>
              <div className="p-8 border rounded-[2.5rem] bg-slate-100/50 space-y-4 shadow-sm">
                <h4 className="text-2xl font-black flex items-center gap-4 text-slate-900"><Layout size={28}/> 呈现“一张脸”</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">视觉资产全面焕新。确保无论业务、哪座城市、哪个项目，客户看到的都是同一个、高标准的“建发”。</p>
              </div>
           </div>
        </div>
      ),
    },


    {
      id: 'P16',
      title: '执行细节：全域灯塔策略 & 客户理念落地',
      content: (
        <div className="grid grid-cols-2 gap-10 py-4 h-full">
           <div className="p-8 border rounded-[2.5rem] bg-slate-50 flex flex-col justify-center">
              <h4 className="text-2xl font-black mb-6 uppercase tracking-widest border-b border-slate-200 pb-4 text-slate-900">全域灯塔战略</h4>
              <div className="space-y-4 text-xs font-medium text-slate-500 leading-relaxed">
                <p>无论住宅开发、物业管理、商业运营还是城市更新，都以超越同行、超越自我为极致标准。</p>
                <div className="grid grid-cols-1 gap-2 mt-4">
                  <p className="p-3 bg-white border rounded">用标杆项目引领专业成长</p>
                  <p className="p-3 bg-white border rounded">用极致标准倒逼能力建设</p>
                </div>
              </div>
           </div>
           <div className="p-8 border rounded-[2.5rem] bg-slate-50 flex flex-col justify-center shadow-lg">
              <h4 className="text-2xl font-black mb-6 uppercase tracking-widest border-b border-slate-200 pb-4 text-slate-900">为客户多走一步</h4>
              <div className="space-y-5">
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-4 bg-white border rounded-xl flex flex-col items-center gap-2 text-[10px] font-bold text-center">
                    <span className="text-blue-600">流程上</span>
                    <span>多往后送一步</span>
                  </div>
                  <div className="p-4 bg-white border rounded-xl flex flex-col items-center gap-2 text-[10px] font-bold text-center">
                    <span className="text-blue-600">需求上</span>
                    <span>多往前想一步</span>
                  </div>
                  <div className="p-4 bg-white border rounded-xl flex flex-col items-center gap-2 text-[10px] font-bold text-center">
                    <span className="text-blue-600">责任上</span>
                    <span>多往外跨一步</span>
                  </div>
                </div>
                <div className="p-4 border rounded shadow-sm bg-white font-bold text-xs">
                  • 举措：创建“建发客户旅程日”定期体验<br/>
                  • 举措：业务板块交叉走访、交叉体验
                </div>
              </div>
           </div>
        </div>
      ),
    },
    {
      id: 'P17',
      title: '第三件事——业务协同机制',
      content: (
        <div className="space-y-8 h-full flex flex-col justify-center">
          <div className="p-8 bg-slate-900 text-white rounded-[3rem] text-center shadow-2xl">
            <p className="text-3xl font-black tracking-tight">建立总部强引领机制，打通跨部门内耗</p>
          </div>
          <div className="grid grid-cols-3 gap-6 font-medium text-slate-500">
            <div className="p-8 border rounded-3xl bg-slate-50 flex flex-col gap-4">
              <Activity className="text-slate-900" size={32}/>
              <h5 className="text-lg font-black text-slate-900">总部强引领</h5>
              <p className="text-xs leading-relaxed">品牌方向、传播节奏、视觉规范集团统一主导。</p>
            </div>
            <div className="p-8 border rounded-3xl bg-slate-50 flex flex-col gap-4">
              <Users className="text-slate-900" size={32}/>
              <h5 className="text-lg font-black text-slate-900">传播强联动</h5>
              <p className="text-xs leading-relaxed">制作全年传播日历。重大节点六大业务同一主题、差异表达，形成合唱。</p>
            </div>
            <div className="p-8 border rounded-3xl bg-slate-50 flex flex-col gap-4">
              <ShieldCheck className="text-slate-900" size={32}/>
              <h5 className="text-lg font-black text-slate-900">专业强标准</h5>
              <p className="text-xs leading-relaxed">战略落地专业对齐。品宣端言之有物，不走过场。</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'TRANS-4',
      title: '四、全年传播铺排简表',
      isTransition: true,
      content: (
        <div className="h-full flex items-center justify-center">
          <div className="text-6xl font-black text-slate-900 border-b-4 border-slate-900 pb-4 tracking-tighter uppercase">
            四、全年传播铺排简表
          </div>
        </div>
      ),
    },
    {
      id: 'P18',
      title: '全年传播铺排总结',
      content: (
        <div className="h-full flex flex-col items-center justify-center space-y-6">
          <div className="w-full flex-1 border-4 border-dashed border-slate-100 rounded-[4rem] text-slate-100 font-black text-4xl flex items-center justify-center uppercase tracking-widest italic select-none">
            ( 简表留空 )
          </div>
          <p className="text-slate-300 text-[10px] font-bold uppercase tracking-widest">Master Workflow Schedule 2026</p>
        </div>
      ),
    },
    {
      id: 'FINAL',
      title: '结语',
      isTransition: true,
      content: (
        <div className="h-full flex flex-col justify-center items-center text-center space-y-12">
          <p className="text-4xl font-light text-slate-400 max-w-4xl tracking-tight leading-relaxed">
            2026 年结束时，任何人提到建发，能说出的不只是“新中式”，而是一家
          </p>
          <div className="p-12 bg-slate-900 rounded-[4rem] text-white shadow-2xl">
             <p className="text-6xl font-black tracking-tight leading-none px-12">
               让生活变得更好的城市综合运营商
             </p>
          </div>
          <div className="pt-24 w-full text-center space-y-4">
             <div className="text-[12px] font-black text-slate-300 uppercase tracking-[0.6em]">
                C&D Group Strategy Presentation 2026
             </div>
             <div className="text-[10px] font-bold text-slate-200 uppercase tracking-[0.4em] opacity-40">
                Building Beyond Expectations · Together Towards Brilliance
             </div>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => { if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1); };
  const prevSlide = () => { if (currentSlide > 0) setCurrentSlide(currentSlide - 1); };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'Backspace') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-[1200px] aspect-video bg-white shadow-3xl rounded-sm overflow-hidden relative group/outer">
        
        {/* Progress */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-slate-50 z-30">
          <motion.div className="h-full bg-slate-900" initial={false} animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`w-full h-full p-16 flex flex-col ${slides[currentSlide].isTransition ? 'bg-slate-50' : 'bg-white'}`}
          >
            {/* Header */}
            {!slides[currentSlide].isTransition && (
              <div className="mb-10">
                <div className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em] mb-4 flex items-center gap-4">
                  <span>{slides[currentSlide].id} / 0508 REPORT</span>
                  <div className="flex-1 h-px bg-slate-100"></div>
                </div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  {slides[currentSlide].title}
                </h1>
              </div>
            )}

            {/* Content Area */}
            <div className="flex-1">
              {slides[currentSlide].content}
            </div>

            {/* Footer */}
            <div className="mt-auto pt-6 flex justify-between items-end border-t border-slate-50">
              <div className="text-[8px] font-bold text-slate-200 uppercase tracking-widest leading-none">
                Confidential Strategy Presentation | 建发集团品牌部 2026
              </div>
              <div className="text-4xl font-black text-slate-50 italic tabular-nums select-none">
                {String(currentSlide + 1).padStart(2, '0')}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Global Controls Overlay */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 pointer-events-none opacity-0 group-hover/outer:opacity-100 transition-opacity">
          <button onClick={prevSlide} className="pointer-events-auto p-4 rounded-full bg-slate-900/5 hover:bg-slate-900/10 transition-colors" disabled={currentSlide === 0}>
            <ChevronLeft size={32} className="text-slate-400" />
          </button>
          <button onClick={nextSlide} className="pointer-events-auto p-4 rounded-full bg-slate-900/5 hover:bg-slate-900/10 transition-colors" disabled={currentSlide === slides.length - 1}>
            <ChevronRight size={32} className="text-slate-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
