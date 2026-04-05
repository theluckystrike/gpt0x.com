/* AI Model Database - gpt0x.com */
(function() {
  'use strict';

  var models = [
    {name:'GPT-4o',provider:'OpenAI',type:'multi',params:'~200B (est)',context:'128K',release:'2024-05',open:false,api:true,desc:'Multimodal flagship model with text, vision, and audio capabilities. Faster and cheaper than GPT-4 Turbo.'},
    {name:'GPT-4 Turbo',provider:'OpenAI',type:'text',params:'~1.8T (est)',context:'128K',release:'2024-04',open:false,api:true,desc:'Updated GPT-4 with improved instruction following and JSON mode. Knowledge cutoff April 2024.'},
    {name:'GPT-4',provider:'OpenAI',type:'text',params:'~1.8T (est)',context:'8K',release:'2023-03',open:false,api:true,desc:'Original GPT-4 model. Strong reasoning and instruction following. Slower and more expensive than Turbo variants.'},
    {name:'GPT-3.5 Turbo',provider:'OpenAI',type:'text',params:'~175B (est)',context:'16K',release:'2023-03',open:false,api:true,desc:'Fast and affordable model for simpler tasks. Good for classification, summarization, and basic generation.'},
    {name:'o1',provider:'OpenAI',type:'text',params:'Unknown',context:'200K',release:'2024-12',open:false,api:true,desc:'Reasoning-focused model that uses chain-of-thought before responding. Excels at math, coding, and logic.'},
    {name:'o1-mini',provider:'OpenAI',type:'text',params:'Unknown',context:'128K',release:'2024-09',open:false,api:true,desc:'Smaller reasoning model optimized for STEM tasks. Faster and cheaper than o1 with strong math performance.'},
    {name:'Claude 3.5 Sonnet',provider:'Anthropic',type:'text',params:'Unknown',context:'200K',release:'2024-06',open:false,api:true,desc:'Anthropic flagship. Excellent at coding, analysis, and nuanced instruction following. Strong safety training.'},
    {name:'Claude 3 Opus',provider:'Anthropic',type:'text',params:'Unknown',context:'200K',release:'2024-03',open:false,api:true,desc:'Most capable Claude 3 model. Best for complex analysis, math, and long-form writing tasks.'},
    {name:'Claude 3 Haiku',provider:'Anthropic',type:'text',params:'Unknown',context:'200K',release:'2024-03',open:false,api:true,desc:'Fastest Claude 3 model. Designed for high-throughput, low-latency use cases like classification and extraction.'},
    {name:'Gemini 1.5 Pro',provider:'Google',type:'multi',params:'Unknown',context:'2M',release:'2024-02',open:false,api:true,desc:'Google multimodal model with industry-leading 2M token context. Handles text, code, images, audio, and video.'},
    {name:'Gemini 1.5 Flash',provider:'Google',type:'multi',params:'Unknown',context:'1M',release:'2024-05',open:false,api:true,desc:'Lightweight Gemini variant optimized for speed. Good balance of capability and efficiency.'},
    {name:'Gemini 2.0 Flash',provider:'Google',type:'multi',params:'Unknown',context:'1M',release:'2024-12',open:false,api:true,desc:'Next-gen Flash model with improved multimodal understanding and agentic capabilities.'},
    {name:'Llama 3.1 405B',provider:'Meta',type:'text',params:'405B',context:'128K',release:'2024-07',open:true,api:false,desc:'Largest open-weight model from Meta. Competitive with GPT-4 on many benchmarks. Apache 2.0 license.'},
    {name:'Llama 3.1 70B',provider:'Meta',type:'text',params:'70B',context:'128K',release:'2024-07',open:true,api:false,desc:'Strong mid-size open model. Popular for fine-tuning and self-hosted deployments. Apache 2.0 license.'},
    {name:'Llama 3.1 8B',provider:'Meta',type:'text',params:'8B',context:'128K',release:'2024-07',open:true,api:false,desc:'Smallest Llama 3.1. Runs on consumer GPUs. Good for edge deployment and fine-tuning experiments.'},
    {name:'Llama 3 70B',provider:'Meta',type:'text',params:'70B',context:'8K',release:'2024-04',open:true,api:false,desc:'Previous generation 70B model. Still capable but superseded by 3.1 series with longer context.'},
    {name:'Llama 3 8B',provider:'Meta',type:'text',params:'8B',context:'8K',release:'2024-04',open:true,api:false,desc:'Compact previous-gen model. Widely used as a base for community fine-tunes.'},
    {name:'Mistral Large 2',provider:'Mistral',type:'text',params:'123B',context:'128K',release:'2024-07',open:false,api:true,desc:'Mistral flagship. Strong multilingual capabilities. Function calling and JSON mode support.'},
    {name:'Mistral Medium',provider:'Mistral',type:'text',params:'~70B (est)',context:'32K',release:'2023-12',open:false,api:true,desc:'Mid-range Mistral model. Good balance of cost and capability for production workloads.'},
    {name:'Mistral Small',provider:'Mistral',type:'text',params:'~22B (est)',context:'32K',release:'2024-02',open:false,api:true,desc:'Cost-effective Mistral model for simpler tasks. Low latency.'},
    {name:'Mixtral 8x22B',provider:'Mistral',type:'text',params:'141B (39B active)',context:'64K',release:'2024-04',open:true,api:true,desc:'Mixture-of-experts model. 8 experts with 22B each, 2 active per token. Apache 2.0 license.'},
    {name:'Mixtral 8x7B',provider:'Mistral',type:'text',params:'46B (13B active)',context:'32K',release:'2023-12',open:true,api:true,desc:'First widely-adopted MoE model. Efficient inference with only 2 experts active per token.'},
    {name:'Phi-3 Medium',provider:'Microsoft',type:'text',params:'14B',context:'128K',release:'2024-05',open:true,api:false,desc:'Compact model trained on high-quality data. Strong performance relative to size on reasoning benchmarks.'},
    {name:'Phi-3 Mini',provider:'Microsoft',type:'text',params:'3.8B',context:'128K',release:'2024-04',open:true,api:false,desc:'Tiny model with surprising capability. Runs on phones. MIT license.'},
    {name:'Command R+',provider:'Cohere',type:'text',params:'104B',context:'128K',release:'2024-04',open:true,api:true,desc:'RAG-optimized model with strong grounding capabilities. Excellent at citing sources and reducing hallucination.'},
    {name:'Command R',provider:'Cohere',type:'text',params:'35B',context:'128K',release:'2024-03',open:true,api:true,desc:'Efficient RAG model. Designed for enterprise search and retrieval workflows.'},
    {name:'DBRX',provider:'Databricks',type:'text',params:'132B (36B active)',context:'32K',release:'2024-03',open:true,api:false,desc:'Fine-grained MoE model with 16 experts, 4 active. Strong on code and SQL generation.'},
    {name:'Falcon 180B',provider:'TII',type:'text',params:'180B',context:'2K',release:'2023-09',open:true,api:false,desc:'Large open model from Technology Innovation Institute. Trained on RefinedWeb dataset.'},
    {name:'Falcon 40B',provider:'TII',type:'text',params:'40B',context:'2K',release:'2023-05',open:true,api:false,desc:'Mid-size Falcon model. Apache 2.0 license. One of the first high-quality open models.'},
    {name:'PaLM 2',provider:'Google',type:'text',params:'~340B (est)',context:'32K',release:'2023-05',open:false,api:true,desc:'Previous Google flagship. Powered Bard before Gemini. Strong multilingual and reasoning abilities.'},
    {name:'Yi-34B',provider:'01.AI',type:'text',params:'34B',context:'200K',release:'2024-03',open:true,api:true,desc:'Chinese-English bilingual model. Competitive with Llama 2 70B despite smaller size. Apache 2.0.'},
    {name:'Yi-6B',provider:'01.AI',type:'text',params:'6B',context:'200K',release:'2023-11',open:true,api:false,desc:'Compact bilingual model. Good for Chinese language tasks and resource-constrained deployments.'},
    {name:'Qwen2 72B',provider:'Alibaba',type:'text',params:'72B',context:'128K',release:'2024-06',open:true,api:true,desc:'Strong multilingual model from Alibaba. Competitive on coding and math benchmarks. Apache 2.0.'},
    {name:'Qwen2 7B',provider:'Alibaba',type:'text',params:'7B',context:'128K',release:'2024-06',open:true,api:false,desc:'Efficient small model. Supports 29 languages. Good for fine-tuning.'},
    {name:'DeepSeek V2',provider:'DeepSeek',type:'text',params:'236B (21B active)',context:'128K',release:'2024-05',open:true,api:true,desc:'MoE model with innovative Multi-head Latent Attention. Extremely cost-efficient at inference.'},
    {name:'DeepSeek Coder V2',provider:'DeepSeek',type:'text',params:'236B (21B active)',context:'128K',release:'2024-06',open:true,api:true,desc:'Code-specialized variant. Supports 338 programming languages. Strong on code completion and generation.'},
    {name:'Stable Diffusion XL',provider:'Stability AI',type:'image',params:'3.5B',context:'N/A',release:'2023-07',open:true,api:true,desc:'Open-source image generation model. 1024x1024 native resolution. Widely used for creative and commercial applications.'},
    {name:'Stable Diffusion 3',provider:'Stability AI',type:'image',params:'8B',context:'N/A',release:'2024-06',open:true,api:true,desc:'Latest Stable Diffusion with improved text rendering and composition. Uses MMDiT architecture.'},
    {name:'DALL-E 3',provider:'OpenAI',type:'image',params:'Unknown',context:'N/A',release:'2023-10',open:false,api:true,desc:'Text-to-image model with strong prompt adherence. Integrated with ChatGPT for iterative refinement.'},
    {name:'Midjourney v6',provider:'Midjourney',type:'image',params:'Unknown',context:'N/A',release:'2023-12',open:false,api:false,desc:'Leading image generation for artistic and photorealistic styles. Discord-based interface.'},
    {name:'FLUX.1 Pro',provider:'Black Forest Labs',type:'image',params:'12B',context:'N/A',release:'2024-08',open:false,api:true,desc:'State-of-the-art image generation from ex-Stability AI researchers. Excellent prompt following.'},
    {name:'Whisper Large v3',provider:'OpenAI',type:'audio',params:'1.5B',context:'N/A',release:'2023-11',open:true,api:true,desc:'Speech recognition model supporting 99 languages. Robust to accents, background noise, and technical language.'},
    {name:'Suno v3.5',provider:'Suno',type:'audio',params:'Unknown',context:'N/A',release:'2024-06',open:false,api:true,desc:'Music generation model. Creates full songs with vocals from text prompts. Supports multiple genres.'},
    {name:'Gemma 2 27B',provider:'Google',type:'text',params:'27B',context:'8K',release:'2024-06',open:true,api:false,desc:'Open model from Google. Research-friendly with strong performance at its size class.'},
    {name:'Gemma 2 9B',provider:'Google',type:'text',params:'9B',context:'8K',release:'2024-06',open:true,api:false,desc:'Compact open model. Good for on-device and research applications.'}
  ];

  var sortCol = 'name';
  var sortDir = 1;

  function getTypeClass(type) {
    var map = { text: 'badge-text', image: 'badge-image', audio: 'badge-audio', multi: 'badge-multi' };
    return map[type] || 'badge-text';
  }

  function getFilteredModels() {
    var search = document.getElementById('search-input').value.toLowerCase();
    var typeFilter = document.getElementById('type-filter').value;
    var providerFilter = document.getElementById('provider-filter').value;
    var openFilter = document.getElementById('open-filter').value;

    return models.filter(function(m) {
      if (search && m.name.toLowerCase().indexOf(search) === -1 && m.provider.toLowerCase().indexOf(search) === -1) return false;
      if (typeFilter && m.type !== typeFilter) return false;
      if (providerFilter && m.provider !== providerFilter) return false;
      if (openFilter === 'yes' && !m.open) return false;
      if (openFilter === 'no' && m.open) return false;
      return true;
    });
  }

  function parseParams(p) {
    var match = p.match(/([\d.]+)/);
    if (!match) return 0;
    var num = parseFloat(match[1]);
    if (p.indexOf('T') !== -1) return num * 1000;
    return num;
  }

  function sortModels(list) {
    return list.sort(function(a, b) {
      var av, bv;
      switch(sortCol) {
        case 'name': av = a.name.toLowerCase(); bv = b.name.toLowerCase(); break;
        case 'provider': av = a.provider.toLowerCase(); bv = b.provider.toLowerCase(); break;
        case 'type': av = a.type; bv = b.type; break;
        case 'params': av = parseParams(a.params); bv = parseParams(b.params); return (av - bv) * sortDir;
        case 'context': av = a.context; bv = b.context; break;
        case 'release': av = a.release; bv = b.release; break;
        case 'open': av = a.open ? 1 : 0; bv = b.open ? 1 : 0; return (av - bv) * sortDir;
        case 'api': av = a.api ? 1 : 0; bv = b.api ? 1 : 0; return (av - bv) * sortDir;
        default: av = a.name; bv = b.name;
      }
      if (av < bv) return -1 * sortDir;
      if (av > bv) return 1 * sortDir;
      return 0;
    });
  }

  function renderTable() {
    var filtered = sortModels(getFilteredModels());
    var tbody = document.getElementById('model-tbody');
    var html = '';
    for (var i = 0; i < filtered.length; i++) {
      var m = filtered[i];
      html += '<tr onclick="gpt0x.showDetail(' + i + ')" data-idx="' + i + '">' +
        '<td style="font-weight:600">' + m.name + '</td>' +
        '<td>' + m.provider + '</td>' +
        '<td><span class="badge ' + getTypeClass(m.type) + '">' + m.type + '</span></td>' +
        '<td>' + m.params + '</td>' +
        '<td>' + m.context + '</td>' +
        '<td>' + m.release + '</td>' +
        '<td><span class="badge ' + (m.open ? 'badge-yes' : 'badge-no') + '">' + (m.open ? 'Yes' : 'No') + '</span></td>' +
        '<td><span class="badge ' + (m.api ? 'badge-yes' : 'badge-no') + '">' + (m.api ? 'Yes' : 'No') + '</span></td>' +
        '</tr>';
    }
    tbody.innerHTML = html;
    document.getElementById('result-count').textContent = filtered.length;

    // Store filtered for detail view
    window._filteredModels = filtered;
  }

  window.gpt0x = {
    sort: function(col) {
      if (sortCol === col) { sortDir *= -1; } else { sortCol = col; sortDir = 1; }
      // Update arrows
      var ths = document.querySelectorAll('thead th');
      for (var i = 0; i < ths.length; i++) {
        var arrow = ths[i].querySelector('.sort-arrow');
        if (arrow) arrow.textContent = '';
      }
      var activeTh = document.querySelector('th[data-col="' + col + '"] .sort-arrow');
      if (activeTh) activeTh.textContent = sortDir === 1 ? ' \u25B2' : ' \u25BC';
      renderTable();
    },
    filter: function() { renderTable(); },
    showDetail: function(idx) {
      var m = window._filteredModels[idx];
      if (!m) return;
      var card = document.getElementById('detail-card');
      card.querySelector('h2').textContent = m.name;
      card.querySelector('.detail-grid').innerHTML =
        '<div class="detail-item"><label>Provider</label><span>' + m.provider + '</span></div>' +
        '<div class="detail-item"><label>Type</label><span>' + m.type + '</span></div>' +
        '<div class="detail-item"><label>Parameters</label><span>' + m.params + '</span></div>' +
        '<div class="detail-item"><label>Context Window</label><span>' + m.context + '</span></div>' +
        '<div class="detail-item"><label>Release Date</label><span>' + m.release + '</span></div>' +
        '<div class="detail-item"><label>Open Source</label><span>' + (m.open ? 'Yes' : 'No') + '</span></div>' +
        '<div class="detail-item"><label>API Available</label><span>' + (m.api ? 'Yes' : 'No') + '</span></div>' +
        '<div class="detail-item" style="grid-column:1/-1"><label>Description</label><span>' + m.desc + '</span></div>';
      document.getElementById('detail-overlay').classList.add('visible');
    },
    closeDetail: function() {
      document.getElementById('detail-overlay').classList.remove('visible');
    }
  };

  document.addEventListener('DOMContentLoaded', function() {
    renderTable();
    document.getElementById('detail-overlay').addEventListener('click', function(e) {
      if (e.target === this) gpt0x.closeDetail();
    });
  });
})();


// === Zovo V5 Pro Nudge System ===
(function() {
  var V5_LIMIT = 5;
  var V5_FEATURE = 'Advanced model filtering';
  var v5Count = 0;
  var v5Shown = false;

  function v5ShowNudge() {
    if (v5Shown || sessionStorage.getItem('v5_pro_nudge')) return;
    v5Shown = true;
    sessionStorage.setItem('v5_pro_nudge', '1');
    var host = location.hostname;
    var el = document.createElement('div');
    el.className = 'pro-nudge';
    el.innerHTML = '<div class="pro-nudge-inner">' +
      '<span class="pro-nudge-icon">\u2726</span>' +
      '<div class="pro-nudge-text">' +
      '<strong>' + V5_FEATURE + '</strong> is a Pro feature. ' +
      '<a href="https://zovo.one/pricing?utm_source=' + host +
      '&utm_medium=satellite&utm_campaign=pro-nudge" target="_blank">' +
      'Get Zovo Lifetime \u2014 $99 once, access everything forever.</a>' +
      '</div></div>';
    var target = document.querySelector('main') ||
      document.querySelector('.tool-section') ||
      document.querySelector('.container') ||
      document.querySelector('section') ||
      document.body;
    if (target) target.appendChild(el);
  }

  // Track meaningful user actions (button clicks, form submits)
  document.addEventListener('click', function(e) {
    var t = e.target;
    if (t.closest('button, [onclick], .btn, input[type="submit"], input[type="button"]')) {
      v5Count++;
      if (v5Count >= V5_LIMIT) v5ShowNudge();
    }
  }, true);

  // Track file drops/selections (for file-based tools)
  document.addEventListener('change', function(e) {
    if (e.target && e.target.type === 'file') {
      v5Count++;
      if (v5Count >= V5_LIMIT) v5ShowNudge();
    }
  }, true);
})();
